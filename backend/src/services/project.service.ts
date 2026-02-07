import mongoose from "mongoose";
import ProjectModel from "../models/project.model";
import TaskModel from "../models/task.model";
import { NotFoundException } from "../utils/appError";
import { TaskStatusEnum } from "../enums/task.enum";
import redis from "../config/redis.config";
import { config } from "../config/app.config";

export const createProjectService = async (
  userId: string,
  workspaceId: string,
  body: {
    emoji?: string;
    name: string;
    description?: string;
  },
) => {
  const project = new ProjectModel({
    ...(body.emoji && { emoji: body.emoji }),
    name: body.name,
    description: body.description,
    workspace: workspaceId,
    createdBy: userId,
  });

  await project.save();

  await redis.incr(`workspace:projects:${workspaceId}:version`);

  return { project };
};

export const getProjectsInWorkspaceService = async (
  workspaceId: string,
  pageSize: number,
  pageNumber: number,
) => {
  const version =
    (await redis.get(`workspace:projects:${workspaceId}:version`)) || "1";

  const cacheKey = `workspace:projects:${workspaceId}:v${version}:page:${pageNumber}:size:${pageSize}`;

  /** 1️⃣ Try Redis first */
  const cached = await redis.get(cacheKey);

  if (cached) {    
    return {
      ...JSON.parse(cached),
      source: "cache",
    };
  }

  /** 2️⃣ DB queries */
  const totalCount = await ProjectModel.countDocuments({
    workspace: workspaceId,
  });

  const skip = (pageNumber - 1) * pageSize;

  const projects = await ProjectModel.find({
    workspace: workspaceId,
  })
    .skip(skip)
    .limit(pageSize)
    .populate("createdBy", "_id name profilePicture -password")
    .sort({ createdAt: -1 });

  const totalPages = Math.ceil(totalCount / pageSize);

  const response = {
    projects,
    totalCount,
    totalPages,
    skip,
  };

  /** 3️⃣ Store in Redis */
  await redis.set(cacheKey, JSON.stringify(response), "EX", config.DEFAULT_TTL);

  return {
    ...response,
    source: "db",
  };
};

export const getProjectByIdAndWorkspaceIdService = async (
  workspaceId: string,
  projectId: string,
) => {
  const project = await ProjectModel.findOne({
    _id: projectId,
    workspace: workspaceId,
  }).select("_id emoji name description");

  if (!project) {
    throw new NotFoundException(
      "Project not found or does not belong to the specified workspace",
    );
  }

  return { project };
};

export const getProjectAnalyticsService = async (
  workspaceId: string,
  projectId: string,
) => {
  const cacheKey = `workspace:project:analytics:${workspaceId}:${projectId}`;

  /** 1️⃣ Try Redis first */
  const cached = await redis.get(cacheKey);

  if (cached) {
    return {
      analytics: JSON.parse(cached),
      source: "cache",
    };
  }

  /** 2️⃣ Validate project ownership */
  const project = await ProjectModel.findById(projectId);

  if (!project || project.workspace.toString() !== workspaceId.toString()) {
    throw new NotFoundException(
      "Project not found or does not belong to this workspace",
    );
  }

  const currentDate = new Date();

  /** 3️⃣ Aggregation */
  const taskAnalytics = await TaskModel.aggregate([
    {
      $match: {
        project: new mongoose.Types.ObjectId(projectId),
      },
    },
    {
      $facet: {
        totalTasks: [{ $count: "count" }],
        overdueTasks: [
          {
            $match: {
              dueDate: { $lt: currentDate },
              status: { $ne: TaskStatusEnum.DONE },
            },
          },
          { $count: "count" },
        ],
        completedTasks: [
          {
            $match: { status: TaskStatusEnum.DONE },
          },
          { $count: "count" },
        ],
      },
    },
  ]);

  const _analytics = taskAnalytics[0];

  const analytics = {
    totalTasks: _analytics.totalTasks[0]?.count || 0,
    overdueTasks: _analytics.overdueTasks[0]?.count || 0,
    completedTasks: _analytics.completedTasks[0]?.count || 0,
  };

  /** 4️⃣ Store in Redis */
  await redis.set(
    cacheKey,
    JSON.stringify(analytics),
    "EX",
    config.DEFAULT_TTL,
  );

  return {
    analytics,
    source: "db",
  };
};
export const updateProjectService = async (
  workspaceId: string,
  projectId: string,
  body: {
    emoji?: string;
    name: string;
    description?: string;
  },
) => {
  const { name, emoji, description } = body;

  const project = await ProjectModel.findOne({
    _id: projectId,
    workspace: workspaceId,
  });

  if (!project) {
    throw new NotFoundException(
      "Project not found or does not belong to the specified workspace",
    );
  }

  if (emoji) project.emoji = emoji;
  if (name) project.name = name;
  if (description) project.description = description;

  await project.save();

  return { project };
};

export const deleteProjectService = async (
  workspaceId: string,
  projectId: string,
) => {
  const project = await ProjectModel.findOne({
    _id: projectId,
    workspace: workspaceId,
  });

  if (!project) {
    throw new NotFoundException(
      "Project not found or does not belong to the specified workspace",
    );
  }

  await project.deleteOne();

  await TaskModel.deleteMany({
    project: project._id,
  });

  return project;
};
