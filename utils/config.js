import dotenv from "dotenv";

// Load config
dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === "production";
const isDev = NODE_ENV === "development";

export default {
  PORT,
  MONGODB_URI,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  isDev,
  isProd,
};
