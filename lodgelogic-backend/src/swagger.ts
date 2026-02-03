import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LodgeLogic API",
      version: "1.0.0",
      description: "A comprehensive API for LodgeLogic management system",
      contact: {
        name: "Vivek Kumar",
        email: "vivekkumar.contacts@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:7002",
        description: "Development server",
      },
      {
        url: "https://your-production-domain.com",
        description: "Production server",
      },
    ],
    components: {
      securitySchemes: {
        cookieAuth: {
          type: "apiKey",
          in: "cookie",
          name: "jwt",
        },
      },
    },
    security: [
      {
        cookieAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // Path to the API routes
};

export const specs = swaggerJsdoc(options);
