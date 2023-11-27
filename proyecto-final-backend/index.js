import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(express.json());

app.listen(4000, () => {
  console.log("Servidor escuchando en puerto 4000");
});
