import express, { Request, Response } from "express";
import cors from "cors";
import { listaProdutos } from "../utils/listaProdutos";

const app = express();
app.use(express.json());
app.use(cors);

app.get("/produtos", async function (req: Request, res: Response) {
  res.json(listaProdutos)
})

app.listen(3000, () => console.log("Server iniciado"));

/* Link de teste => http://localhost:3000/produtos */