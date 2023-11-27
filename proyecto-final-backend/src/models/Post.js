import { Schema, model } from "mongoose";

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
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
        required: false,
      },
    ],
    imageURL: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Number,
      default: new Date(Date.now()).getDate(),
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const PostModel = model("Post", PostSchema);
