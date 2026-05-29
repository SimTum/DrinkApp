import 'dotenv/config'
import User from '../models/user.model.js'
import { generateToken, comparePassword } from '../shared/user.utils.js'


// REGISTER
export const register = async (req, res) => {

    try {
        const user = await User.create(req.body)
        const token = generateToken(user)
        res.status(201).json({ token })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

// LOGIN 
export const login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user || !comparePassword(password, user.password))
        return res.status(401).json({ messge: "invalid credentials" })

    const token = generateToken(user)
    res.json({ token })
}
