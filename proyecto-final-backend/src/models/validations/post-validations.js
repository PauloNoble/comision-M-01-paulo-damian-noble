import { header, param, body } from "express-validator";
import { isValidObjectId } from "mongoose";
import { applyValidations } from "../../middlewares/apply-validations.js";

//Validaciones para la creacio de posts
export const createPostValidations = [
  body("title")
    .notEmpty()
    .withMessage("El campo { title } no debe estar vacio.")
    .isString()
    .withMessage("El campo { title } no debe ser un string."),
  applyValidations,
];

//Validaciones para la obtencion de posts
export const getPostValidations = [
  param("postId")
    .notEmpty()
    .withMessage("El parametro { postId } no debe estar vacio.")
    .isString()
    .withMessage("El parametro { postId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parametro { postId } debe ser una id válida."),
  applyValidations,
];

//Validaciones para actualizar posts
export const updatePostValidations = [
  param("postId")
    .notEmpty()
    .withMessage("El parametro { postId } no debe estar vacio")
    .isString()
    .withMessage("El parametro { postId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parametro { postId } debe ser un id válida."),
  body("title")
    .optional()
    .notEmpty()
    .withMessage("El campo { title } no debe estar vacio.")
    .isString()
    .withMessage("El campo { title } debe ser un string."),
  applyValidations,
];

//Validaciones para la eliminacion de posts
export const deletePostValidations = [
  param("postId")
    .notEmpty()
    .withMessage("El parametro { postId } no debe estar vacio.")
    .isString()
    .withMessage("El parametro { postId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parametro { postId } debe ser un id válida."),
  applyValidations,
];
