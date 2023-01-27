import { servicosCollection, produtosCollection } from "../config/database.js";


export async function postProdutos (req, res){
  
    try {

      res.send(MOCKPRODUTOS)
  
    } catch (err) {
      console.log(err)
      res.status(500).send("Deu algo errado no servidor")
    }
}

export async function getProdutos (req, res) {
    
         try {
 
    
       return res.send(MOCKPRODUTOS)
 
         } catch (error) {
             return res.status(500).send(error.message);
         }
 }


 export async function postServicos (req,res) {
  try {
  
    res.send(MOCKSERVICOS)

  } catch (err) {
    console.log(err)
    res.status(500).send("Deu algo errado no servidor")
  }

 }

 export async function getServicos (req, res) {
    
    try {

  
  return res.send(MOCKSERVICOS)

    } catch (error) {
        return res.status(500).send(error.message);
    }
}




const MOCKSERVICOS= [
    {
        imagem: 'https://www.vetquality.com.br/wp-content/uploads/2018/02/dog-insurance.jpg',
        nome: 'Consulta',
        descrição: 'Agende pelo nosso whatsapp',
        preço: 200,
    },
    {
        imagem: 'https://www.petz.com.br/blog/wp-content/uploads/2021/09/como-cortar-unhas-de-cachorro-3.jpg',
        nome:'Corte de unha (Cães)',
        descrição: 'Das 8am às 18pm',
        preço: 25,
    },
    {
        imagem: 'https://s2.glbimg.com/3XGkUQG1LUt2t-fabGGoFMSoHx0=/0x320:590x819/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/G/Y/RVTI6wQGy0ugeEH2mXTw/whatsapp-image-2021-03-17-at-11.00.18.jpeg',
        nome: 'Corte de asa',
        descrição: 'Destinado à controle de voo',
        preço: 35,
    },
    {
        imagem: 'https://www.mundoecologia.com.br/wp-content/uploads/2019/10/Dog-Walker-e1571683007586.jpg',
        nome: 'Dogwalker',
        descrição: 'Valor por hora, agende com antecedência',
        preço: 50,
    },
    {
        imagem: 'https://www.petz.com.br/blog/wp-content/uploads/2018/08/adestramento3-1280x720.jpg',
        nome: 'Adestramento',
        descrição: 'Valor por aula, agende com antecedência',
        preço: 150,
    },
    {
        imagem: 'https://s2.glbimg.com/7tJyb7SIYU2Fx-5moy2aJfc0r_0=/620x520/smart/e.glbimg.com/og/ed/f/original/2020/04/15/como-dar-banho-no-pet-em-casa-cachorro-gato-quarentena.jpg',
        nome: 'Banho',
        descrição: 'Agende pelo nosso whatsapp',
        preço: 80,
    },
    {
        imagem: 'https://image.cachorrogato.com.br/textimages/tempo-tosa',
        nome: 'Tosa',
        descrição: 'Agende pelo nosso whatsapp',
        preço: 65,
    },
    {
        imagem: 'https://i0.statig.com.br/bancodeimagens/cv/mw/lf/cvmwlfl809ttid4klceze7bgj.jpg',
        nome: 'Tosa higiênica',
        descrição: 'Agende pelo nosso whatsapp',
        preço: 45,
    },
    {
        imagem: 'https://hotelpetvillagesr.com.br/wp-content/uploads/2020/10/day-care.jpg',
        nome: 'DayCare',
        descrição: 'Aceitamos todas as raças e espécies',
        preço: 169.90,
    },
    {
        imagem: 'https://wpets.com.br/wp-content/uploads/2021/11/5767-petsitter-image.jpg',
        nome: 'PetSitter',
        descrição: 'Nossos cuidadores vão até você!',
        preço: 140,
    },
    {
        imagem: 'https://www.jornalestadodegoias.com.br/wp-content/uploads/2019/08/caoegato1-20190812-124242.jpg',
        nome: 'Vacinação completa anual',
        descrição: 'Agende pelo nosso whatsapp',
        preço: 400,
    },
    {
        imagem: 'https://www.bichosaudavel.com/wp-content/uploads/2016/11/filhotes-cao-e-gato.jpg',
        nome: 'Protocolo de primeira vacinação',
        descrição: 'Primeiras vacinas de seu filhote',
        preço: 45,
    },

]



const MOCKPRODUTOS= [
  {
      imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/50142829/a206ed90116148029ca96330f6ecfcaf.jpg?v=637873631273800000',
      nome: 'Ração',
      alvo: 'cães',
      preço: 104,
      estoque: 25,
  },
  {
      imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/50142829/a206ed90116148029ca96330f6ecfcaf.jpg?v=637873631273800000',
      nome: 'Roupa',
      alvo: 'cães',
      preço: 54.90,
      estoque: 25,
  },
  {
      imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/50142829/a206ed90116148029ca96330f6ecfcaf.jpg?v=637873631273800000',
      nome: 'Coleira',
      alvo: 'cães',
      preço: 45,
      estoque: 25,
  },
  {
      imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/50142829/a206ed90116148029ca96330f6ecfcaf.jpg?v=637873631273800000',
      nome: 'Brinquedo',
      alvo: 'cães',
      preço: 23.50,
      estoque: 25,
  },
  {
      imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/50142829/a206ed90116148029ca96330f6ecfcaf.jpg?v=637873631273800000',
      nome: 'Mordedor',
      alvo: 'cães',
      preço: 15,
      estoque: 25,
  },
  {
      imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/50142829/a206ed90116148029ca96330f6ecfcaf.jpg?v=637873631273800000',
      nome: 'Osso Natural',
      alvo: 'cães',
      preço: 7.50,
      estoque: 25,
  },
  
  
 
]