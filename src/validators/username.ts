import Joi from "joi";
import { EQUIPMENT_SLOTS, SLOT_TYPE } from "../services/data.types";
import { AppearanceCreateBody } from "../routes/v1/types";

export const usernameSchema = Joi.string()
  .lowercase()
  .max(12)
  .replace(/[^\x20-\x7E\u00A0]/g, '') // drop non-printable chars (keep NBSP for the next step)
  .replace(/[\u00A0_\- ]+/g, ' ')     // NBSP, _, - and runs of spaces -> one space
  .replace(/^ | $/g, '')              // trim
  .pattern(/^[a-z0-9 ]{1,12}$/)
  .required();

  export const appearanceSchema = Joi.object<AppearanceCreateBody>({
    displayName: usernameSchema,
    gender: Joi.number().valid(0,1),
    equipment: Joi.object().pattern(EQUIPMENT_SLOTS, Joi.object({type: Joi.valid(...SLOT_TYPE), id: Joi.number().integer().max(65535)})),
    bodyColors: Joi.array().items(Joi.number()),
    capturedAt: Joi.date().optional()
  })