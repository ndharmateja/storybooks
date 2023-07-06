import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";
import { error, info } from "./logger.js";

export const connectDb = async () => {
  try {
    info("Connecting to Mongo DB");
    const conn = await mongoose.connect(MONGODB_URI);
    info(`Successfully connected to Mongo DB: ${conn.connection.host}`);
  } catch (err) {
    error(err);
    process.exit(1);
  }
};
