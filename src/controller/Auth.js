import bcrypt from "bcrypt"
import { v4 as uuidV4 } from "uuid"
import { usuarioSchema } from "../model/AuthSchema.js"
import { usuarioCollection } from "../config/database.js"
import { sessaoCollection } from "../config/database.js"

export async function signUp (req, res) {
    const { name, email, password, confirmPassword } = req.body

    const { error } = usuarioSchema.validate({ name, email, password, confirmPassword })

    if (error) {
        const errorMessages = error.details.map(err => err.message)
        return res.status(422).send(errorMessages)
    }

    const passwordHashed = bcrypt.hashSync(password, 10)

    try {
        await usuarioCollection.insertOne({ name, email, password: passwordHashed })
        res.status(201).send("Usuário cadastrado com sucesso!")

    } catch (error) {
        res.status(500).send(error.message)
    }
}
  
export async function signIn (req, res) {
    const { email, password } = req.body

    try {

        const checkUser = await usuarioCollection.findOne({ email })

        if (!checkUser) return res.status(400).send("Usuário ou senha incorretos")

        const isCorrectPassword = bcrypt.compareSync(password, checkUser.password)

        if (!isCorrectPassword) return res.status(400).send("Usuário ou senha incorretos")

        const token = uuidV4();

        await sessaoCollection.insertOne({ idUsuario: checkUser._id, token })

        return res.status(200).send(token)

    } catch (error) {
        res.status(500).send(error.message)
    }
}
