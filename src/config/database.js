import { MongoClient } from "mongodb";
import dotenv from "dotenv"

dotenv.config()

const mongoClient = new MongoClient(process.env.DATABASE_URL)

try {
  await mongoClient.connect()
  console.log("Database is connected")
} catch (error) {
  console.log('Errro no server')
}
const db = mongoClient.db()
export const carrinhoCollection = db.collection('carrinho')
export const usuarioCollection = db.collection('usuarios');
export const sessaoCollection = db.collection("sessoes")
// export const servicosCollection = db.collection("servicos")
// export const produtosCollection = db.collection("produtos")



