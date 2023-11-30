import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { config } from "./src/settings/config.js";
import { startConnection } from "./src/settings/database.js";
import { authRouter } from "./src/routes/auth.routes.js";
import { authHeader } from "./src/models/validations/auth-validation.js";
import { validateToken } from "./src/middlewares/validate-token.js";
import { postRouter } from "./src/routes/post.routes.js";
import { commentRouter } from "./src/routes/comment.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/auth", authRouter);
app.use("/api/post", authHeader, validateToken, postRouter);
app.use("/api/comment", authHeader, validateToken, commentRouter);

app.listen(config.port, async () => {
  await startConnection({ uri: config.mongo, database: config.database });
  console.log("Servidor escuchando en puerto: http://localhost:" + config.port);
});
