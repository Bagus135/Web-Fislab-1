import { NextFunction, Request, Response } from "express";

const adminChecker = (req:Request, res: Response, next : NextFunction) =>{
    try {
        if(req.user.role <3){
            return res.status(401).json({error :'Unauthorized - Only "Koor" and "Admin" can access this method'})
        }
        next()
    } catch (error:any) {
        console.log("Error in adminChecker handler", error.message);
        res.status(500).json({error : "Internal Server Error"})
    }
}

export default adminChecker