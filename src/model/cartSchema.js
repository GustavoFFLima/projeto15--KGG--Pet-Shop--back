import joi from "joi";

export const cartSchema = joi.object({
    produto: joi.string().required(),
})