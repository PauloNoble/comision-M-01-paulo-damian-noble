import { Schema, model } from "mongoose";

const CommentSchema = new Schema(
  {
    autor: {
      type: Schema.Types.ObjectId,
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