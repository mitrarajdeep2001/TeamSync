import { Router } from "express";
import { getCurrentUserController } from "../controllers/user.controller";

const userRoutes = Router();

/**
 * @swagger
 * /user/current:
 *   get:
 *     summary: Get current authenticated user
 *     tags: [Users]
 *     description: >
 *       Returns the currently logged-in user based on the active
 *       Passport session. Requires a valid session cookie.
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: User fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User fetch successfully
 *                 user:
 *                   type: object
 *       401:
 *         description: User not authenticated
 *       500:
 *         description: Internal server error
 */
userRoutes.get("/current", getCurrentUserController);

export default userRoutes;
