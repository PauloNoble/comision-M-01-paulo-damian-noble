import { PostModel } from "../models/Post.js";
import { CommentModel } from "../models/Comment.js";

// Controlador para crear post
export const ctrlCreatePost = async (req, res) => {
  const userId = req.user._id;

  try {
    const { title, description, imageURL } = req.body;

    const post = new PostModel({
      title,
      description,
      imageURL,
      author: userId,
    });

    await post.create;

    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener una lista de posteos
export const ctrlListOfPost = async (req, res) => {
  const userId = req.user._id;

  try {
    const post = await PostModel.find({
      author: userId,
    })
      .populate("author", ["title", "description", "imageURL", "createdAt"])
      .populate("comments", ["description", "author"]);

    if (!post) {
      return res.status(404).json({ error: "Post no encontrado" });
    }

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener los posteos
export const ctrlGetPost = async (req, res) => {
  const userId = req.user._id;
  const { postId } = req.params;

  try {
    const post = await PostModel.findOne({
      _id: postId,
      author: userId,
    })
      .populate("author", ["title", "description", "imageURL", "createdAt"])
      .populate("comments", ["description", "author"]);

    if (!post) {
      return res.status(404).json({ error: "Post no encontrado" });
    }

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//Controlador para actualizar post
export const ctrlUpdatePost = async (req, res) => {
  const userId = req.user._id;
  const { postId } = req.params;

  try {
    const post = await PostModel.findOne({
      _id: postId,
      author: userId,
    });

    if (!post) {
      return res.status(404).json({ error: "Post no encotrado" });
    }

    post.set(req.body);

    await post.save();

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//Controlador para eliminar post
export const ctrlDeletePost = async (req, res) => {
  const userId = req.user._id;
  const { postId } = req.params;

  try {
    const post = await PostModel.findOne({
      _id: postId,
      author: userId,
    });

    if (!post) {
      return res.status(404).json({ error: "Post no encontrado" });
    }

    await CommentModel.deleteMany({ _id: { $in: post.comments } });

    await PostModel.findOneAndDelete({
      _id: postId,
      author: userId,
    });

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
