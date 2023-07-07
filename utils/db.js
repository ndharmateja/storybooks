import mongoose from "mongoose";
import { config, logger } from "./index.js";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(config.MONGODB_URI);
    return conn.connection.host;
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
};

export default { connectDb };
