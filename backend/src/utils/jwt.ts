import jwt from'jsonwebtoken';
import {Response } from 'express';

const generateToken = (userId :string , res : Response) =>{
    const token = jwt.sign({userId}, process.env.jwtSecret!, {expiresIn : '1d'})
     res.cookie('jwt', token, {
        maxAge : 1 * 24* 60 * 60 * 1000,
    })
    
}

export default generateToken