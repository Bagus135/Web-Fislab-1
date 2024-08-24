import {NextFunction, Request, Response } from "express";
import prisma from "../db/prisma.js";

const praktikanChecker = async(req: Request, res : Response, next :NextFunction) =>{
   try {
       if ( req.user?.role !== 1){
           return res.status(401).json({error : "Sorry , only 'Praktikan' is authorized "})
        }

        const userKelompok =  await prisma.kelompok.findUnique({
            where:{
                userId : req.user.id
            },
            select :{
                nomorKel : true
            }
        })
        if(!userKelompok){
            return res.status(404).json({error : "Not Found"})
        }
        req.praktikan = { kelompok : userKelompok?.nomorKel}
        
        next()

    } catch (err : any){
        console.log("Error in praktikan checker", err.message);
        res.status(500).json({error : "Internal Server Error"})
    }
        
}

export default praktikanChecker