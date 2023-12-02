import { CommentModel } from "../models/Comment.js";
import { PostModel } from "../models/Post.js";

// Controlador para crear comment
export const ctrlCreateComment = async (req, res) => {
  const userId = req.user._id;
  const { postId } = req.params;

  try {
    const comment = new CommentModel({
      ...req.body,
      author: userId,
      post: postId,
    });

    await comment.save();

    await PostModel.findOneAndUpdate(
      { _id: postId },
      { $push: { comments: comment._id } }
    );

    return res.status(201).json(comment);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener una lista de comments
export const ctrlListComment = async (req, res) => {
  try {
    const allComments = await CommentModel.find({}, "-__v");

    res.status(200).json(allComments);
  } catch (error) {
    res.status(500).json({ error: "No se pueden obtener comments" });
  }
};

// Controlador parta obtener comment por id
export const ctrlGetCommentById = async (req, res) => {
  const { commentId } = req.params;

  try {
    const comment = await CommentModel.findOne({
      _id: commentId,
    });

    if (!comment) return res.status(404).json({ error: "No existe comment" });

    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: "No se puede obtener comment" });
  }
};

//Controlador para actualizar comment
export const ctrlUpdateComment = async (req, res) => {
  const { commentId } = req.params;

  try {
    const comment = await CommentModel.findOne({
      _id: commentId,
    });

    if (!comment) {
      return res.status(404).json({ error: "Comment no encotrado" });
    }

    comment.set(req.body);

    await comment.save();

    return res.status(200).json(comment);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//Controlador para eliminar comment
export const ctrlDeleteComment = async (req, res) => {
  const userId = req.user._id;
  const { commentId } = req.params;

  try {
    const comment = await CommentModel.findOne({
      _id: commentId,
      author: userId,
    });

    if (!comment) {
      return res.status(404).json({ error: "Comment no encontrado" });
    }

    await CommentModel.findOneAndDelete({
      _id: commentId,
      author: userId,
    });

    return res.status(200).json(comment);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
