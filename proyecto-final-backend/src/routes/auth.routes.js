import { Router } from "express";
import {
  createUserValidation,
  loginUserValidations,
} from "../models/validations/user-validations.js";
import {
  ctrlCreateUser,
  ctrlLoginUser,
} from "../controllers/user.controllers.js";

const authRouter = Router();

//Ruta para login
authRouter.post("/login", loginUserValidations, ctrlLoginUser);

//Ruta para register
authRouter.post("/register", createUserValidation, ctrlCreateUser);

export { authRouter };
