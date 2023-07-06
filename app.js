import express from "express";
import { isDev, PORT } from "./utils/config.js";
import { connectDb } from "./utils/db.js";
import { unknownRoute } from "./utils/middleware.js";
import morgan from "morgan";

// Connect to DB
await connectDb();

// Express app
const app = express();

// Middleware
app.use(express.json());
if (isDev) app.use(morgan("dev"));

// Routes
app.use(unknownRoute);

// Listen
app.listen(PORT, () =>
  console.log(`[${isDev ? "dev" : "prod"}] Server running in on: ${PORT}`)
);
