import DatabaseMetodos from "../utils/DatabaseMetodos.js";

class Frases {
  static rotas(app) {
    app.get("/frases", (req, res) => {
      const response = DatabaseMetodos.escolheFrase();
      res.status(200).json(response);
    });
  }
}

export default Frases;
