import express, { type Express } from "express";
import v1 from "./routes/v1";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.use("/v1", v1);

app.listen(process.env.PORT, () => {
  console.log(`server running at port ${process.env.PORT}`);
});
