import { AppearanceCreateBody, UsernameParams } from "../../routes/v1/types";
import { DataService } from "../../services/dataService";
import { Request, Response } from "express";

export class AppearanceController {
  dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  get = async (req: Request<UsernameParams>, res: Response) => {
    const { username } = req.params;
    const playerEquipment = await this.dataService.getPlayerEquipment(username);
    res.json();
  };

  create = async (req: Request, res: Response) => {
    const body: AppearanceCreateBody = req.body;

    const savedPlayerEquipment = await this.dataService.savePlayerEquipment("", body);
    res.json();
  };
  
}
