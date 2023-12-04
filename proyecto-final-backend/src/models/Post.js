import { Schema, model, Types } from "mongoose";

// Se crea el Schema del modelo de datos para los posts
const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxLenght: 50,
      minLenght: 5,
    },
    description: {
      type: String,
      required: true,
      maxLenght: 250,
      minLenght: 5,
    },
    username: {
      type: String,
      required: true,
    },
    author: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    comments: [
      {
        type: Types.ObjectId,
        ref: "Comment",
      },
    ],
    imageURL: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const PostModel = model("Post", PostSchema);
