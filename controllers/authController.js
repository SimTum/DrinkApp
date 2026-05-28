import jwt from 'jsonwebtoken'
import User from '../models/usuario.model.js'

// REGISTER
export const register = async (req, res) => {
    try {
        const user = await User.create(req.body)
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '12h' }
        );
        res.status(201).json({ token })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }


    // LOGIN 
    export const login = async (req, res) => {
        const { email, password } = req.bod
        const user = await User.findOne({ email })
        if (!user || await user.comparePassword(password))
            return res.status(401).json({ messge: "invalid credentials" })

        const token = jwt.sign(
            { id: user._id },
            proces.env.JWT_SECRET,
            { expiresIn: '12h' }
        )
        res.json({ token })
    }
}