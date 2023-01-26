import { cartSchema } from "../model/cartSchema.js";

export async function cartValidation(req, res, next) {
    const { product } = req.body;

    const validation = cartSchema.validate({ product }, { abortEarly: false });
    if (validation.error){
        const messageError = validation.error.details.map((detail) => detail.message);
        return res.status(422).send(messageError);
    }
    next();
}