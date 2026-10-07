import express, { type Request, type Response } from "express";
import { validateUsername } from "./middlewares";
import { AppearanceController } from "../../controllers/v1/appearanceController";
import { DataService } from "../../services/dataService";

const router = express.Router();

const appearanceController = new AppearanceController(new DataService());

router.get("/:username", validateUsername, appearanceController.get);

router.put("/:username", (req: Request, res: Response) => {
  res.send("Birds home page");
});

export default router;
