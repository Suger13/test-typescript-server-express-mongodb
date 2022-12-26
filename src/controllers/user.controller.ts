import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import bcrypt, { hash } from 'bcrypt'
import { db } from '../dbConfig/dbConfigurator'
import dotenv from 'dotenv'
dotenv.config()

const userController = {
    async register (req:Request, res: Response) {
        const email = req.body.email
        const password = req.body.password
        const hashedPassword = await bcrypt.hash(password, 10)
        db.collection('users').insertOne({
            email: email,
            password: hashedPassword
        })
        return res.status(201).json({
            msg: `user has been created!`
        })
    },
    async login (req:Request, res:Response) {
        const email = req.body.email
        const password = req.body.password

        const response = await db.collection('users').findOne({
            email: email
        })

        if(!response){
            return res.status(404).json({
                msg: "User not found"
            })
        }
        const isPassword = await bcrypt.compare(password, response.password)
        if(!isPassword){
            return res.status(404).json({
                msg:"Password is incorrect!"
            })
        }
        const secretKey = '86ddcf7e60f5962eb65bc21b1ad3cf1610044958710bfa248d6b46fd8def7a56bc3c57f7549399d7f6084cdcd2ca4096'
        const token = jwt.sign({
            firstname: "fitstName",
            role: "admin"
        }, secretKey)
        
        return res.status(200).json({
            msg: "loginSuccess",
            token: token
        })
    }
}

export default userController;