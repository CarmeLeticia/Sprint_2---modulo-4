import express from "express";
import Dicas from "./src/controllers/Frases.js";

const port = 3000;

const app = express();

app.listen(port, () => {
  console.log(`Service ativo em http://localhost:${port}`);
});

app.use(express.json());

Dicas.rotas(app);
