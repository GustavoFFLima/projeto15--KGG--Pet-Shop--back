import { sessaoCollection } from "../config/database.js";
import { usuarioCollection } from "../config/database.js";
import { carrinhoCollection } from "../config/database.js";

export async function postCart(req, res) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
}

export async function getCart(req, res) {}
