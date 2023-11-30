import jwt from "jsonwebtoken";
import { config } from "../settings/config.js";

// con el userId se genera el token
export const createJWT = async ({ userId }) => {
  return new Promise((res, rej) => {
    jwt.sign({ userId }, config.jwt_secret, (err, token) => {
      if (err) rej(err);
      res(token);
    });
  });
};

//verificacion de validez de token
export const verifyJWT = async ({ token }) => {
  return new Promise((res, rej) => {
    jwt.verify(token, config.jwt_secret, (err, decoded) => {
      if (err || !decoded.userId) rej("Token no valido");
      res(decoded);
    });
  });
};
