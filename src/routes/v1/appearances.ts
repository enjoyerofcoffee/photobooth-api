import express from "express";
import { validateAppearance, validateUsername } from "./middlewares";
import { AppearanceController } from "../../controllers/v1/appearanceController";
import { DataService } from "../../services/dataService";

const router = express.Router();

const appearanceController = new AppearanceController(new DataService());

router.get("/:username", validateUsername, appearanceController.get);

router.put("/", validateAppearance, appearanceController.create);

export default router;
