import { getProdutos, getServicos} from "../controller/Produtos.js"
import { Router } from "express"

const produtosRoutes = Router()

produtosRoutes.get("/produtos", getProdutos)
produtosRoutes.get("/servicos", getServicos)

export default produtosRoutes