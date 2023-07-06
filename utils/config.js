import dotenv from "dotenv";

// Load config
dotenv.config({ path: "./config/config.env" });

export const PORT = process.env.PORT || 3000;
export const MONGODB_URI = process.env.MONGODB_URI;

const NODE_ENV = process.env.NODE_ENV;
export const isProd = NODE_ENV === "production";
export const isDev = NODE_ENV === "development";
