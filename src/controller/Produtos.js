import { db } from "../db/db.js";


export async function getProdutos (req, res) {
    
         try {
 
       const produtinhos = await db.collection("produtos").toArray();
 
       if (!produtinhos) return res.sendStatus(401);
       
       return res.send(produtinhos)
 
         } catch (error) {
             return res.status(500).send(error.message);
         }
 }


 export async function getServicos (req, res) {
    
    try {

  const servicosPet = await db.collection("servicos").toArray();

  if (!servicosPet) return res.sendStatus(401);
  
  return res.send(servicosPet)

    } catch (error) {
        return res.status(500).send(error.message);
    }
}