import { UserModel } from "../models/User.js";
import * as bcrypt from "bcrypt";
import { createJWT } from "../utils/jwt.js";

// controlador para crear usuario
export const ctrlCreateUser = async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
  } catch (error) {
    res.status(500).json({ error: "No se pudo crear el usuario" });
  }
};

// controlador para loguin
export const ctrlLoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) return res.status(404).json({ error: "No se encotro usuario" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ error: "Credenciales no validas" });

    const token = await createJWT({ userId: user._id });

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: "No se pudo realizar el login" });
  }
};
