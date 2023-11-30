import { header } from "express-validator";
import { applyValidations } from "../../middlewares/apply-validations.js";

//Validacion para solicitar que envien el token por headders y validarlo
export const authHeader = [
  header("authorization")
    .exists()
    .withMessage("Debe enviar el header { Authorization } con el token."),
  applyValidations,
];
