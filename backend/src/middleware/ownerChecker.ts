import { NextFunction, Request, Response } from "express";

const ownerChecker = (req:Request, res: Response, next : NextFunction) =>{
    try {
        if(req.body.signature !== process.env.signature){
            return res.status(401).json({error :'Unauthorized - Only "Owner" can access this method'})
        }
        next()
    } catch (error:any) {
        console.log("Error in signup admin handler", error.message);
        res.status(500).json({error : "Internal Server Error"})
    }
}

export default ownerChecker