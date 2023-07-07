import dotenv from "dotenv";

// Load config
dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === "production";
const isDev = NODE_ENV === "development";

export default { PORT, MONGODB_URI, isDev, isProd };
