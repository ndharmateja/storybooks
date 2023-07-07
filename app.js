import express from "express";
import { config, db, middleware as mw, logger } from "./utils/index.js";
import morgan from "morgan";
import { engine } from "express-handlebars";
import { router } from "./routes/index.js";
import * as path from "path";
import { fileURLToPath } from "url";

// Connect to DB
logger.info("Connecting to Mongo DB");
const hostName = await db.connectDb();
logger.info(`Successfully connected to Mongo DB: ${hostName}`);

// Express app
const app = express();

// Middleware
app.use(express.json());
if (config.isDev) app.use(morgan("dev"));
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
app.use(mw.unknownRoute);

// Listen
app.listen(config.PORT, () =>
  console.log(
    `[${config.isDev ? "dev" : "prod"}] Server running in on: ${config.PORT}`
  )
);
