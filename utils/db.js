import mongoose from "mongoose";
import { config, logger } from "./index.js";

const connectDb = async () => {
  try {
    logger.info("Connecting to Mongo DB");
    const conn = await mongoose.connect(config.MONGODB_URI);
    logger.info(`Successfully connected to Mongo DB: ${conn.connection.host}`);
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
};

export default { connectDb };
