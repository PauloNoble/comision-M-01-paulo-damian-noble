import { Schema, model, Types } from "mongoose";

// Se crea el Schema del modelo de datos para los comments
const CommentSchema = new Schema(
  {
    post: {
      type: Types.ObjectId,
      ref: "Post",
      required: true,
    },
    author: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxLenght: 150,
      minLenght: 1,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const CommentModel = model("Comment", CommentSchema);
