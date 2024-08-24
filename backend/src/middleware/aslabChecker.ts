import { NextFunction, Request, Response } from "express";

const aslabChecker = async (req:Request, res : Response, next : NextFunction) =>{
    try {
        if(req.user?.role === 1 ) {
            return res.status(401).json({error : "UnAuthorized - Only 'Aslab' can access this method"})
        }
        
        next();

    } catch (error:any) {
        console.log('Error in aslabChecker handler', error.message);
        res.status(500).json({error: "Internal Server Error"})
    }
}

export default aslabChecker