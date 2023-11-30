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

const postRouter = Router();

//Ruta para crear un post
postRouter.post("/", createPostValidations, ctrlCreatePost);
//Ruta para obtener una lista de posts
postRouter.get("/", listPostValidations, ctrlListOfPost);

//Ruta para obtener un post por id
postRouter.get("/:postId", getPostValidations, ctrlGetPost);
//Ruta para actualizar post por id
postRouter.patch("/:postId", updatePostValidations, ctrlUpdatePost);
//Ruta para eliminar un post por id
postRouter.delete("/:postId", deletePostValidations, ctrlDeletePost);

export { postRouter };
