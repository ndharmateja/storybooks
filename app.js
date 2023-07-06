import express from "express";
import { isDev, PORT } from "./utils/config.js";
import { connectDb } from "./utils/db.js";
import { unknownRoute } from "./utils/middleware.js";
import morgan from "morgan";
import { engine } from "express-handlebars";
import { router } from "./routes/index.js";
import * as path from "path";
import { fileURLToPath } from "url";

// Connect to DB
await connectDb();

// Express app
const app = express();

// Middleware
app.use(express.json());
if (isDev) app.use(morgan("dev"));
app.engine(".hbs", engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");

// Static assets
// Reference: https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", router);
app.use(unknownRoute);

// Listen
app.listen(PORT, () =>
  console.log(`[${isDev ? "dev" : "prod"}] Server running in on: ${PORT}`)
);
