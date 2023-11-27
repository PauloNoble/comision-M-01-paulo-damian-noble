import { Schema, model } from "mongoose";
import * as bcrypt from "bcrypt";

// Se crea el Schema del modelo de datos para los usuarios
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatarURL: {
      type: String,
      required: true,
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  {
    timestapms: true,
    versionKey: false,
  }
);

//Middleware para hashear la contraseña antes de guardarla en la BD
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const hash = await bcrypt.hash(this.password, 15);
  this.password = hash;
  next();
});

export const UserModel = model("User", UserSchema);
