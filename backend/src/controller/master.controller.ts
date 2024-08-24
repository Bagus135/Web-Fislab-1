import { Request, Response } from "express";
import prisma from "../db/prisma.js";

export const editRole = async (req : Request, res: Response) =>{
    try {
        const {uid} = req.params;
        const {role} = req.body
        const editRole = await prisma.user.update({
            data : {
                role : role
            },
            where : {
                id : uid
            }
        })

        if(!editRole){
            return res.status(409).json({error : "Cannot change user role"})
        };

        res.status(200).json({
            payload : editRole,
            message : "User role is successfully changed"
        })

    } catch (error:any) {
        console.log("Error in edit role Controller", error.message);
        res.status(500).json({error : " Internal Server Error"})
    }
}