import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { dbConfig } from "./utils/dbConfig";

const app: Application = express();
const port: number | string = process.env.PORT || 2244;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use(helmet());
app.use(morgan("dev"));

app.listen(port, () => {
  console.clear();
  dbConfig();
});
