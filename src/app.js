import express from "express";
import selecao_controller from "./app/controllers/selecao_controller.js";

const app = express();

// Indica ao Express que ele deve ler um body no formato JSON
app.use(express.json());

// Rotas
app.get("/selecoes", selecao_controller.index);
app.get("/selecoes/:id", selecao_controller.show);
app.post("/selecoes", selecao_controller.store);
app.put("/selecoes/:id", selecao_controller.update);
app.delete("/selecoes/:id", selecao_controller.delete);

export default app;
