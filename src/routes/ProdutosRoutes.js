import { getProdutos, getServicos, postServicos, postProdutos} from "../controller/Produtos.js"
import { Router } from "express"

const produtosRoutes = Router()

produtosRoutes.get("/produtos", getProdutos)
produtosRoutes.get("/servicos", getServicos)
produtosRoutes.post ("/servicos", postServicos) 
produtosRoutes.post ("/produtos", postProdutos) 


export default produtosRoutes