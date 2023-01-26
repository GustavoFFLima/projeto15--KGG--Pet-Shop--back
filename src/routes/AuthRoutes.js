import { signIn, signUp } from "../controller/Auth.js"
import { cartValidation } from "../middlewares/cartMiddleware.js"
import { postCart } from "../controller/cartController.js"
import { Router } from "express"

const authRouter = Router()

// Rotas de autenticação
authRouter.post("/cadastro", signUp)
authRouter.post("/login", signIn)

authRouter.post("/carrinho", cartValidation, postCart)
export default authRouter