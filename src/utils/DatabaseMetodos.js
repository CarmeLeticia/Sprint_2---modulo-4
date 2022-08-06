import { Database } from "../infra/Database.js";
import geraNumAleatorio from "./gerarNumAleatorio.js";

class DatabaseMetodos {
  static escolheFrase() {
    return Database.Frases[geraNumAleatorio()];
  }
  static inserirFrase(frase) {
    Database.Frases = [...Database.Frases, frase];
    return Database.Frases;
  }
}

export default DatabaseMetodos;
