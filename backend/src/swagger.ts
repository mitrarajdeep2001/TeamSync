import swaggerJSDoc from "swagger-jsdoc";
import { config } from "./config/app.config";

const swaggerOptions: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API",
      version: "1.0.0",
      description: "API documentation generated using swagger-jsdoc",
    },
    servers: [
      {
        url: `http://localhost:${config.PORT}${config.BASE_PATH}`,
        description: "Local server",
      },
    ],
    components: {
      securitySchemes: {
        cookieAuth: {
          type: "apiKey",
          in: "cookie",
          name: "connect.sid",
        },
      },
    },
    security: [{ cookieAuth: [] }],
  },

  // 👇 IMPORTANT: paths to files with Swagger comments
  apis: ["./src/routes/**/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
