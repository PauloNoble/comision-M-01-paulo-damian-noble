import { Router } from "express";
import {
  createCommentValidations,
  deleteCommentValidations,
  getCommentValidations,
  listCommentValidations,
  updateCommentValidations,
} from "../models/validations/comment-validations.js";
import {
  ctrlCreateComment,
  ctrlDeleteComment,
  ctrlGetCommentById,
  ctrlListComment,
  ctrlUpdateComment,
} from "../controllers/comment.controllers.js";

const commentRouter = Router();

//Ruta para la creacion de comment segun id de un post
commentRouter.post("/:postId", createCommentValidations, ctrlCreateComment);
//Ruta para obtener los comentarios segun id de un post
commentRouter.get("/:postId", listCommentValidations, ctrlListComment);
//Ruta para obtener un comment segun id de un post y id de un commment
commentRouter.get("/:commentId", getCommentValidations, ctrlGetCommentById);
//Ruta para actualizar comment
commentRouter.patch("/:commentId", updateCommentValidations, ctrlUpdateComment);
//Ruta para eliminar comment
commentRouter.delete(
  "/:commentId",
  deleteCommentValidations,
  ctrlDeleteComment
);

export { commentRouter };
