import { Router } from "express";
import selecao_controller from "./app/controllers/selecao_controller.js";

const router = Router();

// Rotas
router.get("/selecoes", selecao_controller.index);
router.get("/selecoes/:id", selecao_controller.show);
router.post("/selecoes", selecao_controller.store);
router.put("/selecoes/:id", selecao_controller.update);
router.delete("/selecoes/:id", selecao_controller.delete);

export default router;