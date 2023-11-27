import "dotenv/config";

// con dotenv se crea y exporta el objeto config
export const config = {
  port: process.env.PORT || 4000,
  mongo: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/",
  jwt_secret: process.env.JWT_SECRET || "viajeros",
  database: process.env.DATABASE_NAME || "foro-viajeros",
};
