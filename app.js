import express from "express";
import * as dotenv from "dotenv";
import DicaController from "./src/controllers/dica-controller.js";

dotenv.config();

const porta = 3000;
const app = express();

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`)
})

app.use(express.json())

DicaController.rotas(app)
