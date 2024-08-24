import { NextFunction, Request, Response } from "express";

const masterChecker = (req:Request, res: Response, next : NextFunction) =>{
    try {
        if(req.user.role <4){
            return res.status(401).json({error :'Unauthorized - Only "Admin" can access this method'})
        }
        next()
    } catch (error:any) {
        console.log("Error in masterChecker handler", error.message);
        res.status(500).json({error : "Internal Server Error"})
    }
}

export default masterChecker