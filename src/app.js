import express from "express";
import router from "./routes.js";

const app = express();

// Indica ao Express que ele deve ler um body no formato JSON
app.use(express.json());

// usar o router
app.use(router);


export default app;
