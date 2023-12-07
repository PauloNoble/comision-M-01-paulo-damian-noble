import { Router } from "express";
import {
  createPostValidations,
  deletePostValidations,
  getPostValidations,
  listPostValidations,
  updatePostValidations,
} from "../models/validations/post-validations.js";
import {
  ctrlCreatePost,
  ctrlDeletePost,
  ctrlGetPost,
  ctrlListOfPost,
  ctrlUpdatePost,
} from "../controllers/post.controllers.js";
import { authHeader } from "../models/validations/auth-validation.js";
import { validateToken } from "../middlewares/validate-token.js";

const postRouter = Router();

//Ruta para crear un post
postRouter.post(
  "/",
  authHeader,
  validateToken,
  createPostValidations,
  ctrlCreatePost
);
//Ruta para obtener una lista de posts
postRouter.get("/", listPostValidations, ctrlListOfPost);

//Ruta para obtener un post por id
postRouter.get("/:postId", getPostValidations, ctrlGetPost);
//Ruta para actualizar post por id
postRouter.patch(
  "/:postId",
  authHeader,
  validateToken,
  updatePostValidations,
  ctrlUpdatePost
);
//Ruta para eliminar un post por id
postRouter.delete(
  "/:postId",
  authHeader,
  validateToken,
  deletePostValidations,
  ctrlDeletePost
);

export { postRouter };
