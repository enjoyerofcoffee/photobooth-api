import express, { type Request, type Response } from "express";
import { validateUsername } from "./middlewares";

const router = express.Router();

router.get("/:username", validateUsername, (req: Request, res: Response) => {
  res.send("Birds home page");
});

router.put("/:username", (req: Request, res: Response) => {
  res.send("Birds home page");
});

export default router;
