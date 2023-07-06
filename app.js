import express from "express";
import dotenv from "dotenv";

// Load config
dotenv.config({ path: "./config/config.env" });

// Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Listen
app.listen(PORT, () =>
  console.log(`Server running in '${process.env.NODE_ENV}' on: ${PORT}`)
);
