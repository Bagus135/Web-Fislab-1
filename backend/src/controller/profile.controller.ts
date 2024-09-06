import { Request, Response } from "express";
import prisma from "../db/prisma.js";

export const getAllUser = async (req : Request, res : Response) =>{
    try {
        const getAllUser = await prisma.user.findMany({
            orderBy : {
                role : "desc"
            },
            select : {
                id: true ,
                nrp: true,
                fullname: true,
                gender: true,
                role: true,
                title: true, 
            }
        });

        res.status(200).json({
            payload : getAllUser
        })

    } catch (error:any) {
        console.log('Error in get All User controler', error.message);
        res.status(500).json({error : "Internal Server Error"})
    }
}

export const getDetailProfile = async (req : Request, res : Response) =>{
    try {
        const {uid} = req.params

        if(!uid){
            return res.status(403).json({error : "The request is invalid"})
        }

        const detailProfile  = await prisma.user.findUnique({
            where : {
                id : uid
            },
            select : {
                id : true,
                nrp : true,
                fullname : true,
                nickname : true,
                gender : true,
                contact : true,
                description : true,
                email : true,
                github : true,
                ig : true,
                profilPic : true,
                title : true,
                role : true,
            }
        })
        if(!detailProfile){
            return res.status(404).json({error : "The user details is not found"})
        }
        res.status(200).json({
            payload : detailProfile
        })
    } catch (error:any) {
        console.log('Error in getAllProfile controler', error.message);
        res.status(500).json({error : "Internal Server Error"})
    }
};

export const editUserProfile = async (req : Request, res : Response) =>{
    try {
        const {uid} = req.params;
        const {nickname,contact,description,email,github,ig,profilPic,title} = req.body
        if(!uid){
            return res.status(403).json({error : "The request is invalid"})
        };
        const editProfile = await prisma.user.update({
            where : {
                id : uid
            },
            data : {
                nickname,
                contact,
                description,
                email,
                github,
                ig,
                profilPic,
                title,
            },
            select : {
                id: true ,
                nrp: true,
                fullname: true,
                nickname: true,
                description: true,
                gender: true,
                role: true,
                contact: true,
                profilPic: true,
                email: true,
                createdAt: true,
                updateAt: true,
                github : true,
                ig : true,
                title : true
            }
        })

        if(!editProfile){
            return res.status(409).json({ error : "Cannot Updating the Profile!"})
        }

        res.status(200).json({
            payload : editProfile,
            message : "Your Profile has been Updated"
        })

    } catch (error:any) {
        console.log("Error in Edit User Profile controller", error.message )
        res.status(500).json({error : "Internal Server Error"})
    }
}

export const getJudulAslab = async(req : Request, res : Response) =>{
    try{
    const {uid : idJudulAslab} = req.params

    const getJudulAslab = await prisma.judulAslab.findUnique({
       where : {
        id : idJudulAslab
       }
    })

    if(!getJudulAslab){
        return res.status(404).json({error : "Data not found "})
    }
    res.status(200).json({
        payload : getJudulAslab,
        message : "Data Succesfully updated"
    })
} catch(error : any){
    console.log("Error in get judul aslab controller", error.message);
    res.status(500).json({error : "Internal Server Error"})
}}