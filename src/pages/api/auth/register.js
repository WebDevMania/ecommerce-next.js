import User from "../../../../models/User";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { email, password } = req.body
            const userExists = await User.findOne({ email })

            if(userExists){
                return res.status(500).json({msg: 'User already exists'})
            } 

            const hashedPassword = await bcrypt.hash(password, 10)

            const savedUser = await User.create({...req.body, password: hashedPassword})

            const {password: hashedPass, ...others} = savedUser._doc

            const token = jwt.sign({id: savedUser._id.toString()}, process.env.JWT_SECRET, {expiresIn: '4h'})

            return res.status(201).json({others, token})
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

