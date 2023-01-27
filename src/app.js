import express from "express"
import cors from "cors"
import authRouter from "./routes/AuthRoutes.js"
import produtosRoutes from "./routes/ProdutosRoutes.js"

const app = express()
app.use(express.json())
app.use(cors())

app.use( [ authRouter, produtosRoutes ] )


const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}`)
})