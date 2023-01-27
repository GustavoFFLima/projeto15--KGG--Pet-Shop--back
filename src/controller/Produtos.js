import { servicosCollection, produtosCollection } from "../config/database.js";


export async function getProdutos (req, res) {
    
         try {
 
       const produtinhos = await produtosCollection.toArray();
 
       if (!produtinhos) return res.sendStatus(401);
       
       return res.send(produtinhos)
 
         } catch (error) {
             return res.status(500).send(error.message);
         }
 }


 export async function getServicos (req, res) {
    
    try {

  const servicosPet = await servicosCollection.toArray();

  if (!servicosPet) return res.sendStatus(401);
  
  return res.send(servicosPet)

    } catch (error) {
        return res.status(500).send(error.message);
    }
}