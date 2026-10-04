import { Request, Response, NextFunction } from "express"
import { usernameSchema } from "../../validators/username";

export const validateUsername = (req: Request, res: Response, next: NextFunction) => {
    const {params} = req

    const result = usernameSchema.validate(params['username'])

    if(result.error){
        return res.send(result.error)
    }

    next();
}