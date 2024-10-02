import { NextFunction, Request, Response } from "express";
import prisma from "../db/prisma.js";


export const getAslabSessionClass = async(req:Request, res:Response) =>{
    try {
        const AslabModul = await prisma.judulAslab.findMany({
            where: {
                idAslab : req.user.id
            },
            select:{
                id : true,
            }
        })

        const AslabModulID = AslabModul.map((value)=>{
            return value.id
        })

        const aslabSchedule =  await prisma.weekSchedule.findMany({
            where : {
                idJudulAslab : {
                    in : AslabModulID
                }
            },
            include : {
                Schedule : true,
                JudulAslab :true
            }, orderBy : {
                week : "asc"
            }
        })

        if(!aslabSchedule){
            return res.status(404).json({error : "The Schedule is not found"})
        }

        res.status(200).json({
            payload : aslabSchedule
        })
   
    } catch (error:any) {
        console.log("Error in getScheduleAslab controller", error.message)
        res.status(500).json({error : "Internal Server Error"})
    }
}

export const checkQuotaSchedule = async (req:Request, res:Response, next : NextFunction) =>{
    try {
        const{uidJudul:idJudulAslab, idKel : idKelompok } = req.params
        const {date, hour} = req.body;

        if(!idKelompok || !idJudulAslab){
            return res.status(401).json({error : "Unauthorized"})
        }
        if(!date||!hour){
            return res.status(401).json({error : "The Date cannot empty"})
        }

        const getMaxSchedule = await prisma.jadwal.findMany({
        where :{
            date : date,
            hour : hour,
        }
        })
        console.log(getMaxSchedule.length);
        
        if(getMaxSchedule.length > 1){
            return res.status(403).json({error : "Forbidden - The schedule is full at this time"})
        }

        next()
    } catch (error:any) {
        console.log("Error in checkQuotaSchedule controller", error.message)
        res.status(500).json({error : "Internal Server Error"})
    }
}

// export const createScheduleAslab = async(req:Request , res :Response)=>{
//     try {
//         const{uidJudul:idJudulAslab, idKel : idKelompok } = req.params
//         const {Date, idAslab} = req.body;

//         const updateScheduleAslab = await prisma.jadwal.create({
//             data : {
//                 date : Date,
//                 kelompokid : Number(idKelompok),
//                 idJudulAslab : idJudulAslab,
//                 aslabIds : idAslab,
//                 noJudul :no
//             }
//         })
        
//         res.status(200).json({
//             payload : updateScheduleAslab,
//             message : "The Schedule is Updated"
//         })
//     } catch (error:any) {
//         console.log("Error in getScheduleAslab controller", error.message)
//         res.status(500).json({error : "Internal Server Error"})
//     }
// }

export const editScheduleAslab = async(req:Request, res:Response) =>{
    try {
        const{uidJudul:idJudulAslab, idKel : idKelompok } = req.params
        const {no, date, hour} = req.body;

        const editSchedule = await prisma.jadwal.update({
            data:{
                date:date,
                hour : hour,
            },
            where : {
                idJudulAslab : idJudulAslab,
                kelompokid : Number(idKelompok),
                no : no
                } 
        })
        res.status(200).json({
            payload : editSchedule,
            message : "The Schedule is Update Successfully"
        })
    } catch (error:any) {
        console.log("Error in getScheduleAslab controller", error.message)
        res.status(500).json({error : "Internal Server Error"})
    }
}

export const getAllScheduleAslab = async(req:Request, res :Response) =>{
    try {
        const getAllSchedule = await prisma.jadwal.findMany({
            include : {
                aslabIds: true,
            }
        })
        
        if(!getAllSchedule){
            return res.status(404).json({error : "The All Schedule is not Found"})
        }

        res.status(200).json({
            payload : getAllSchedule
        })

    } catch (error:any) {
        console.log("Error in getScheduleAslab controller", error.message)
        res.status(500).json({error : "Internal Server Error"})
    }
}






