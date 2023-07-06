import express from "express";
import { NODE_ENV, PORT } from "./utils/config.js";
import { connectDb } from "./utils/db.js";

// Connect to DB
await connectDb();

// Express app
const app = express();

// Listen
app.listen(PORT, () =>
  console.log(`Server running in '${NODE_ENV}' on: ${PORT}`)
);
