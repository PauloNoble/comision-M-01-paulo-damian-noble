import { body, param } from "express-validator";
import { isValidObjectId } from "mongoose";
import { applyValidations } from "../../middlewares/apply-validations.js";

//Validaciones para la creacion de comments
export const createCommentValidations = [
  param("postId")
    .notEmpty()
    .withMessage("El parametro { postId } no debe estar vacio.")
    .isString()
    .withMessage("El parametro { postId } debe ser un string")
    .custom(isValidObjectId)
    .withMessage("El parametro { postId } debe ser una id válida."),
  body("description")
    .notEmpty()
    .withMessage("El campo { description } no debe estar vacio.")
    .isString()
    .withMessage("El campo { description } debe ser un string."),
  applyValidations,
];

//Validaciones para obtener la lista de comments
export const listCommentValidations = [
  param("postId")
    .notEmpty()
    .withMessage("El parametro { postId } no debe estar vacio.")
    .isString()
    .withMessage("El parametro { postId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parametro { postId } debe ser una id válida"),
  applyValidations,
];

//Validaciones para obtener comments
export const getCommentValidations = [
  param("postId")
    .notEmpty()
    .withMessage("El parametro { postId } no debe estar vacio.")
    .isString()
    .withMessage("El parametro { postId } debe ser un string")
    .custom(isValidObjectId)
    .withMessage("El parametro { postId } debe ser una id válida."),
  param("commentId")
    .notEmpty()
    .withMessage("El parametro { commentId } no debe estar vacio.")
    .isString()
    .withMessage("El parametro { commentId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parametro { commentId } debe ser una id válida."),
  applyValidations,
];

//Validaciones para la eliminacion de comments
export const deleteCommentValidations = [
  param("postId")
    .notEmpty()
    .withMessage("El parametro { postId } no debe estar vacio.")
    .isString()
    .withMessage("El parametro { postId } debe ser un string")
    .custom(isValidObjectId)
    .withMessage("El parametro { postId } debe ser una id válida."),
  param("commentId")
    .notEmpty()
    .withMessage("El parametro { commentId } no debe estar vacio.")
    .isString()
    .withMessage("El parametro { commentId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parametro { commentId } debe ser una id válida."),
  applyValidations,
];

//Validaciones para la actualizacion de comments
export const updateCommentValidations = [
  param("postId")
    .notEmpty()
    .withMessage("El parametro { postId } no debe estar vacio.")
    .isString()
    .withMessage("El parametro { postId } debe ser un string")
    .custom(isValidObjectId)
    .withMessage("El parametro { postId } debe ser una id válida."),
  param("commentId")
    .notEmpty()
    .withMessage("El parametro { commentId } no debe estar vacio.")
    .isString()
    .withMessage("El parametro { commentId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parametro { commentId } debe ser una id válida."),
  body("description")
    .optional()
    .notEmpty()
    .withMessage("El campo { description } no debe estar vacio")
    .isString()
    .withMessage("El campo { description } debe ser un string"),
  applyValidations,
];
