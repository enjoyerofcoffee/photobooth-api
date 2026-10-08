import { Request, Response, NextFunction } from "express";
import { appearanceSchema, usernameSchema } from "../../validators/username";

export const validateUsername = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { params } = req;

  const result = usernameSchema.validate(params["username"]);

  if (result.error) {
    return res.send(result.error);
  }

  next();
};

export const validateAppearance = (req: Request, res: Response, next: NextFunction) => {
  const body = req.body

  const result = appearanceSchema.validate(body);

  if (result.error) {
    return res.send(result.error);
  }

  next()
}