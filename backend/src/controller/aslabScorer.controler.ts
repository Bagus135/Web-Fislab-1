import { Request, Response } from "express";
import prisma from "../db/prisma.js";


export const getSessionAslab = async (req:Request, res : Response) =>{
    try {
        const dataJudul = await prisma.judulAslab.findMany({
            where : {
                idAslab : req.user.id
            },
        })
        
        if(!dataJudul) return res.status(404).json({error : 'Data not Found'});

        const noJudul = dataJudul.map((val) => {
            return val.noJudul
        })

        const promiseData: any[] = []
        noJudul.map((val) => {
            promiseData.push(
            prisma[`praktikum${val}`].findMany({
            where : {
                aslabId : req.user.id   
                }
            })
          )
        });
        const data = await Promise.all(promiseData)
        
        res.status(200).json({
            payload : data
        })

    } catch (error : any) {
        console.log(`error in get session aslab scorer`, error.message);
        res.status(500).json({error : `Internal Server Error `})
    }
}

// export const getScore = async (req : Request, res : Response) =>{
//     try {
//         const {uid : idPraktikan} = req.params;
//         const {noJudul} = req.body;

//         if(!idPraktikan || ! noJudul){
//             return res.status(403).json({error : "The request is invalid"})
//         }

//         const table = `Praktikum${noJudul}`
//         const getDetailScore = await prisma.$queryRaw`SELECT * FROM ${table} WHERE userId = ${idPraktikan} AND aslabId = ${req.user.id}` as getScorePraktikanfromAslab
//         if(!getDetailScore){
//             return res.status(404).json({error : "Data not found"})
//         }

//         res.status(200).json({
//             payload : getDetailScore
//         })

//     } catch (error :any) {
//         console.log("Error in getKelompokAslab controller", error.message)
//         res.status(500).json({error : "Internal Server Error"})
//     }
// }

export const editScore = async (req : Request, res : Response) =>{
    try {
        const {uid : idPraktikan, idKel : kelompokId} = req.params;
   
        const {noJudul, PreLab, InLab, Abstrak, Pendahuluan, Metodologi, Pembahasan, Kesimpulan, Format, nilaiTotal, comment} = req.body;
         
        if(!noJudul) return res.status(422).json({error: `Fill All Fields`})

        if(!idPraktikan || ! noJudul){
            return res.status(403).json({error : "The request is invalid"})
        }

        const  editScore = await prisma[`praktikum${noJudul}`].update({
            data : {
                PreLab : PreLab,
                InLab : InLab,
                Abstrak : Abstrak,
                Pendahuluan : Pendahuluan,
                Metodologi : Metodologi,
                Pembahasan : Pembahasan,
                Kesimpulan : Kesimpulan,
                Format:Format,
                nilaiTotal : nilaiTotal,
                comment : comment,
            },
            where : {
                userId : idPraktikan,
                aslabId : req.user.id,
                kelompokId : Number(kelompokId),
                noJudul : noJudul
            }
        })

        if(!editScore){
            return res.status(403).json({error : "Data not Updated!!"})
        }

        res.status(200).json({
            payload : editScore
        })

    } catch (error :any) {
        console.log("Error in getKelompokAslab controller", error.message)
        res.status(500).json({error : "Internal Server Error"})
    }
}
