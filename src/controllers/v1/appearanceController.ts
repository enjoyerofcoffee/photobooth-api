import { DataService } from "../../services/dataService";
import { Request, Response } from "express";

export class AppearanceController {
  dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  get = async (req: Request<{ username: string }>, res: Response) => {
    const { username } = req.params;
    const playerEquipment = await this.dataService.getPlayerEquipment(username);
    res.json();
  };
}
