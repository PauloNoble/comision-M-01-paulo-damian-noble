import { Schema, model, Types } from "mongoose";

// Se crea el Schema del modelo de datos para los comments
const CommentSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const CommentModel = model("Comment", CommentSchema);
