import { CommentModel } from "../models/Comment.js";
import { PostModel } from "../models/Post.js";

// Controlador para crear comment
export const ctrlCreateComment = async (req, res) => {
  const userId = req.user._id;

  try {
    const { description } = req.body;

    const comment = new CommentModel({
      description,
      author: userId,
    });

    await comment.save;

    return res.status(201).json(comment);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener los comments
export const ctrlGetComment = async (req, res) => {
  const userId = req.user._id;
  const { commentId } = req.params;

  try {
    const comment = await CommentModel.findOne({
      _id: commentId,
      author: userId,
    })
      .populate("author", ["username", "avatar"])
      .populate("comments", ["description", "author"]);

    if (!comment) {
      return res.status(404).json({ error: "Comment no encontrado" });
    }

    return res.status(200).json(comment);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//Controlador para actualizar comment
export const ctrlUpdateComment = async (req, res) => {
  const userId = req.user._id;
  const { commentId } = req.params;

  try {
    const comment = await CommentModel.findOne({
      _id: commentId,
      author: userId,
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
