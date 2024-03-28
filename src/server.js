import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

// Escutar a porta 3000
app.listen(PORT, () => {
  console.log(`O servidor está rodando no endereço http://localhost:${PORT}`);
});
