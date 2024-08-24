import { Request, Response } from "express";
import prisma from "../db/prisma.js";

export const createShortLink = async (req : Request, res : Response) =>{
    try {
        const {uid} = req.params;
        const {shortlink, link, description, title} = req.body
        if(!link || !shortlink){
            return res.status(400).json({error : "The request data body cannot empty"})
        }

        const ifExist = await prisma.link.findUnique({
            where : {
            shortLink : shortlink
            }
        })
        if(!!ifExist){
            return res.json(409).json({error : "Short Link is already exist"})
        }

        const createShortLink = await prisma.link.create({
            data : {
                creatorId : uid,
                link : link,
                shortLink : shortlink,
                description : description,
                title : title,
            }
        })
        if(!createShortLink){
            return res.status(409).json({error : "Data cannot be created"})
        }

        res.status(200).json({
            payload : createShortLink,
            message : "ShortLink is successfuly created"
        })

    } catch (error : any) {
        console.log("Error in shortlink create controller", error.message);
        res.status(500).json({error : "Internal Server Error"})
    }
}

export const getAllShortLink = async (req : Request, res : Response) =>{
    try {
        const getShortLink = await prisma.link.findMany({
            orderBy : {
                createdAt : "asc"
            }
        })
        res.status(200).json({
            payload : getShortLink
        })

    } catch (error: any) {
        console.log("Error in get shortlink controller", error.message);
        res.status(500).json({error : "Internal Server Error"})
    }
}

export const deleteShortlink = async (req : Request, res : Response) =>{
    try{
        const {id} = req.params;
        const {shortlink, link} = req.body
        if(!link || !shortlink){
            return res.status(400).json({error : "The request data body cannot empty"})
        }

        const deleteShortlink = await prisma.link.delete({
             where : {
                id : Number(id),
                shortLink : shortlink,
             }
        });
        if(!deleteShortlink){
            return res.status(409).json({error : "ShortLink cannot be updated"})
        }
        res.status(200).json({
            payload : deleteShortlink,
            message : "ShortLink is Successfully Deleted"
        })
    } catch (error: any) {
        console.log("Error in edit shortlink controller", error.message);
        res.status(500).json({error : "Internal Server Error"})
    }
}