import { sessaoCollection } from "../config/database";
import { usuarioCollection } from "../config/database";
import { carrinhoCollection } from "../config/database";

export async function postCart(req, res) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
}

export async function getCart(req, res) {}
