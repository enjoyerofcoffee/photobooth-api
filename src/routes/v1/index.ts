import express from "express";
import appearancesRouter from "./appearances";

const router = express.Router();

router.use("/appearances", appearancesRouter);

export default router;
