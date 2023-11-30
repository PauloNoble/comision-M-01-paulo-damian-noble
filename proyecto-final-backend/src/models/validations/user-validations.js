import { body } from "express-validator";
import { applyValidations } from "../../middlewares/apply-validations.js";
import { UserModel } from "../User.js";

//Validaciones para la creacion de usuario
export const createUserValidation = [
  body("avatarURL")
    .notEmpty()
    .withMessage("El campo { avatarURL } no debe estar vacio.")
    .isString()
    .withMessage("El campo { avatarURL } debe ser un string.")
    .isURL()
    .withMessage("El campo { avatarURL } debe ser una URL válida."),
  body("email")
    .notEmpty()
    .withMessage("El campo { email } no debe estar vacio.")
    .isEmail()
    .withMessage("El campo { email } debe ser un email válido.")
    //Validacion personalizada para verificar que el email no esté en uso.
    .custom(async (value) => {
      const user = await UserModel.findOne({ email: value });

      if (user) throw new Error("Este email ya esta en uso");

      return true;
    }),
  body("username")
    .notEmpty()
    .withMessage("El campo { username } no debe estar vacio.")
    .isString()
    .withMessage("El campo { username } debe ser un string.")
    //Validacion personalizada para verificar que el username no esté en uso.
    .custom(async (value) => {
      const user = await UserModel.findOne({ username: value });

      if (user) throw new Error("El username ya esta en uso");

      return true;
    }),
  body("password")
    .notEmpty()
    .withMessage("El campo { password } nod debe estar vacio.")
    .isString()
    .withMessage("El campo { password } debe ser un string."),
  applyValidations,
];

//Validaciones para login
export const loginUserValidations = [
  body("email")
    .notEmpty()
    .withMessage("El campo { email } no debe estar vacio.")
    .isEmail()
    .withMessage("El campo { email } debe ser un email válido."),
  body("password")
    .notEmpty()
    .withMessage("El campo { password } no debe estar vacio.")
    .isString()
    .withMessage("El campo { password } debe ser un string."),
  applyValidations,
];
