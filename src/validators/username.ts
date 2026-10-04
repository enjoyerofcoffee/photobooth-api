import Joi from "joi";

export const usernameSchema = Joi.string()
  .lowercase()
  .max(12)
  .replace(/[^\x20-\x7E\u00A0]/g, '') // drop non-printable chars (keep NBSP for the next step)
  .replace(/[\u00A0_\- ]+/g, ' ')     // NBSP, _, - and runs of spaces -> one space
  .replace(/^ | $/g, '')              // trim
  .pattern(/^[a-z0-9 ]{1,12}$/)
  .required();