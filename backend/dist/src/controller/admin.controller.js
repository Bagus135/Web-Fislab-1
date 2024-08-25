import prisma from "../db/prisma.js";
export const getViewScoreAdmin = async (req, res) => {
    try {
        const getNilai = await prisma.nilai.findMany({
            orderBy: {
                kelompokid: "asc"
            },
            include: {
                praktikum1: {
                    select: { aslab: true, nilaiTotal: true, kelompokId: true, aslabId: true, nrp: true, noJudul: true, name: true }
                },
                praktikum2: {
                    select: { aslab: true, nilaiTotal: true, kelompokId: true, aslabId: true, nrp: true, noJudul: true, name: true }
                },
                praktikum3: {
                    select: { aslab: true, nilaiTotal: true, kelompokId: true, aslabId: true, nrp: true, noJudul: true, name: true }
                },
                praktikum4: {
                    select: { aslab: true, nilaiTotal: true, kelompokId: true, aslabId: true, nrp: true, noJudul: true, name: true }
                },
                praktikum5: {
                    select: { aslab: true, nilaiTotal: true, kelompokId: true, aslabId: true, nrp: true, noJudul: true, name: true }
                },
                praktikum6: {
                    select: { aslab: true, nilaiTotal: true, kelompokId: true, aslabId: true, nrp: true, noJudul: true, name: true }
                },
                praktikum7: {
                    select: { aslab: true, nilaiTotal: true, kelompokId: true, aslabId: true, nrp: true, noJudul: true, name: true }
                },
                praktikum8: {
                    select: { aslab: true, nilaiTotal: true, kelompokId: true, aslabId: true, nrp: true, noJudul: true, name: true }
                },
                praktikum9: {
                    select: { aslab: true, nilaiTotal: true, kelompokId: true, aslabId: true, nrp: true, noJudul: true, name: true }
                },
                praktikum10: {
                    select: { aslab: true, nilaiTotal: true, kelompokId: true, aslabId: true, nrp: true, noJudul: true, name: true }
                },
            }
        });
        res.status(200).json({
            payload: getNilai
        });
    }
    catch (error) {
        console.log("Error in get View Score Praktikan for Admin", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export const addJudulAslab = async (req, res) => {
    try {
        const { uid: idAslab } = req.params;
        const { kodeJudul, noJudul, Judul, Aslab } = req.body;
        if (!kodeJudul || !noJudul || !Judul || !Aslab) {
            return res.status(400).json({ error: "The request data body cannot empty" });
        }
        const find = await prisma.judulAslab.findFirst({
            where: {
                idAslab, noJudul
            }
        });
        if (find) {
            return res.status(409).json({ error: `Data is Already Exist` });
        }
        const createJudulAslab = await prisma.judulAslab.create({
            data: {
                idAslab: idAslab,
                Aslab: Aslab,
                kodeJudul: kodeJudul,
                noJudul: noJudul,
                judul: Judul,
            },
        });
        if (!createJudulAslab) {
            return res.status(409).json({ error: "Data cannot be updated" });
        }
        res.status(200).json({
            payload: createJudulAslab,
            message: "Data Succesfully updated"
        });
    }
    catch (error) {
        console.log("Error in register judul aslab controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export const deleteJudulAslab = async (req, res) => {
    try {
        const { id: idJudulAslab } = req.params;
        const Delete = await prisma.judulAslab.delete({
            where: {
                id: idJudulAslab
            }
        });
        if (!Delete) {
            return res.status(409).json({ error: ' Data Cannnot Deleted' });
        }
        res.status(200).json({ message: `Data Successfully Deleted` });
    }
    catch (error) {
        console.log(`error in delete judul aslab`, error.message);
        res.status(500).json({ error: `Internal Server Error` });
    }
};
export const getAllJudulAslab = async (req, res) => {
    try {
        const data = await prisma.judulAslab.findMany({
            orderBy: {
                noJudul: "asc"
            }
        });
        if (!data) {
            return res.status(204).json({ error: `Data not found!` });
        }
        res.status(200).json({
            payload: data
        });
    }
    catch (error) {
        console.log("Error in get All judul aslab", error.message);
        res.status(500).json({ error: `Internal Server Error` });
    }
};
export const addPraktikanGroupMember = async (req, res) => {
    try {
        const { uid: idPraktikan } = req.params;
        const { nomor, nrp, fullname } = req.body;
        if (!idPraktikan || !nomor || !nrp || !fullname) {
            return res.status(422).json({ error: "Please full all fields" });
        }
        ;
        const finduser = await prisma.kelompok.findUnique({
            where: {
                userId: idPraktikan
            }
        });
        if (!finduser) {
            const data = await Promise.all([prisma.kelompok.create({
                    data: {
                        fullname: fullname,
                        nomorKel: nomor,
                        nrp: nrp,
                        userId: idPraktikan
                    }
                }),
                prisma.nilai.create({
                    data: {
                        kelompokid: nomor,
                        userID: idPraktikan,
                    }
                })
            ]);
            if (!data[0] || !data[1]) {
                return res.status(409).json({ error: 'Data not created' });
            }
            return res.status(200).json({
                payload: data,
                message: 'Data Successfully Created'
            });
        }
        const data = await prisma.kelompok.update({
            where: {
                userId: idPraktikan
            },
            data: {
                fullname: fullname,
                nomorKel: nomor,
                nrp: nrp,
                userId: idPraktikan
            }
        });
        const data2 = await prisma.nilai.update({
            where: {
                userID: finduser.userId,
                kelompokid: finduser.nomorKel,
            }, data: {
                kelompokid: nomor,
                userID: idPraktikan
            }
        });
        if (!data) {
            return res.status(409).json({ error: 'Data not Updated!' });
        }
        res.status(200).json({
            payload: data,
            message: 'Data Successfully Updated!'
        });
    }
    catch (error) {
        console.log("Error in create praktikan group member", error.message);
        res.status(500).json({ error: `Internal Server Error` });
    }
};
export const deletePraktikanGroupMember = async (req, res) => {
    try {
        const { uid } = req.params;
        const deleteuser = await prisma.kelompok.delete({
            where: {
                userId: uid
            }
        });
        const deleteUserNilai = await prisma.nilai.delete({
            where: {
                userID: uid
            }
        });
        if (!deleteuser || !deleteUserNilai)
            return res.status(409).json({ error: `Cannot deleted data` });
        res.status(200).json({ message: `Data successfully deleted` });
    }
    catch (error) {
        console.log("Error in create praktikan group member", error.message);
        res.status(500).json({ error: `Internal Server Error` });
    }
};
export const getAllGroupPraktikan = async (req, res) => {
    try {
        const data = await prisma.kelompok.findMany({
            orderBy: {
                nomorKel: "asc"
            }
        });
        if (!data) {
            return res.status(204).json({ error: "Data not found" });
        }
        res.status(200).json({
            payload: data
        });
    }
    catch (error) {
        console.log("error in get all group praktikan", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
    ;
};
export const addWeekSchedule = async (req, res) => {
    try {
        const { id: idJudulAslab } = req.params;
        const { nomorKel, week, noJudul, aslabId, aslab } = req.body;
        if (!idJudulAslab || !nomorKel || !week || !noJudul || !aslabId || !aslab) {
            return res.status(422).json({ error: "Please full all fields" });
        }
        ;
        const find = await Promise.all([prisma.weekSchedule.findFirst({
                where: {
                    noJudul: noJudul,
                    kelompokId: nomorKel
                }
            }), prisma.kelompok.findMany({
                where: { nomorKel: nomorKel }
            }),
        ]);
        if (find[0])
            return res.status(409).json({ error: `Judul is Already Exist for this Kelompok` });
        if (!find[0] && find[1].length > 0) {
            const a = [];
            for (let i = 0; i < find[1].length; i++) {
                a.push({
                    aslab: aslab,
                    aslabId: aslabId,
                    kelompokId: nomorKel,
                    userId: find[1][i].userId,
                    name: find[1][i].fullname,
                    nrp: find[1][i].nrp,
                });
            }
            const data = await prisma.weekSchedule.create({
                data: {
                    kelompokId: nomorKel,
                    week: week,
                    idJudulAslab: idJudulAslab,
                    noJudul: noJudul,
                    Schedule: {
                        create: {
                            idJudulAslab: idJudulAslab,
                            kelompokid: nomorKel,
                            noJudul: noJudul
                        }
                    }
                },
                include: {
                    Schedule: {}
                }
            });
            const data2 = await prisma[`praktikum${noJudul}`].createMany({
                data: a
            });
            if (!data2) {
                const delete1 = await prisma.jadwal.delete({
                    where: {
                        idJudulAslab: idJudulAslab,
                        no: data.no
                    }
                });
                const delete2 = await prisma.weekSchedule.delete({
                    where: {
                        idJudulAslab: idJudulAslab,
                        no: data.no
                    }
                });
            }
            if (!data || !data2) {
                return res.status(409).json({ error: "Data not Created!" });
            }
            return res.status(200).json({
                payload: data,
                message: `Data successfully created`
            });
        }
        if (find[1].length === 0)
            return res.status(404).json({ error: "Kelompok Not found" });
        res.status(409).json({
            error: `Data is Already Exist`
        });
    }
    catch (error) {
        console.log("error in create week schedule", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
    ;
};
export const getAllWeekSchedule = async (req, res) => {
    try {
        const data = await prisma.weekSchedule.findMany({
            orderBy: {
                kelompokId: "asc",
            },
            include: {
                JudulAslab: true
            }
        });
        if (!data) {
            return res.status(204).json({ error: "Data not Found" });
        }
        res.status(200).json({
            payload: data,
        });
    }
    catch (error) {
        console.log("error in get all week schedule", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
    ;
};
export const deleteWeekSchedule = async (req, res) => {
    const { id: idJudulAslab, no } = req.params;
    const { noKel, noJudul, aslabId } = req.body;
    if (!idJudulAslab || !no) {
        return res.status(422).json({ error: "Please full all fields" });
    }
    ;
    try {
        const data = await prisma.jadwal.delete({
            where: {
                idJudulAslab: idJudulAslab,
                no: Number(no)
            }
        });
        const data2 = await prisma.weekSchedule.delete({
            where: {
                idJudulAslab: idJudulAslab,
                no: Number(no)
            }
        });
        const data3 = await prisma[`praktikum${noJudul}`].deleteMany({
            where: {
                kelompokId: noKel,
                aslabId: aslabId
            }
        });
        if (!data || !data2 || !data3) {
            return res.status(409).json({ error: `Data failed to deleted` });
        }
        res.status(200).json({ message: `Data Successfully Deleted` });
    }
    catch (error) {
        console.log("error in delete week schedule", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export const updateFinalScore = async (req, res) => {
    try {
        const { data } = req.body;
        if (!data)
            return res.status(422).json({ error: `Req body cannot empty` });
        const promiseData = [];
        for (let i = 0; i < data.length; i++) {
            promiseData.push(prisma.finalscore.upsert({
                where: {
                    userId: data[i].uid,
                    nrp: data[i].nrp,
                    kelompokId: data[i].noKel,
                },
                update: {
                    totalscore: data[i].totalScore
                },
                create: {
                    userId: data[i].uid,
                    nrp: data[i].nrp,
                    kelompokId: data[i].noKel,
                    totalscore: data[i].totalScore,
                    name: data[i].name,
                }
            }));
        }
        await Promise.all(promiseData);
        res.status(200).json({ message: `Data Successfully Synchronized` });
    }
    catch (error) {
        console.log("error in upadate final score", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export const resetFinalScore = async (req, res) => {
    try {
        const reset = await prisma.finalscore.deleteMany();
        if (!reset)
            return res.status(409).json({ error: `Cannot reset the data` });
        res.status(200).json({ message: `Data succesfully deleted` });
    }
    catch (error) {
        console.log("error in reset final score", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export const createInfo = async (req, res) => {
    try {
        const { uid } = req.params;
        const { title, category, desc, name } = req.body;
        if (!title || !category || !desc || !name)
            return res.status(422).json(`Data cannot be emmpty`);
        const data = await prisma.info.create({
            data: {
                title: title,
                description: desc,
                judul: category,
                creatorName: name
            }
        });
        if (!data)
            return res.status(409).json({ error: `Cannot Create Data` });
        res.status(200).json({ message: `Data succesfully created` });
    }
    catch (error) {
        console.log("error in create Info admin", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export const deleteInfo = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await prisma.info.delete({
            where: {
                id: Number(id)
            }
        });
        if (!data)
            return res.status(409).json({ error: `Cannot delete Data` });
        res.status(200).json({ message: `Data succesfully deleted` });
    }
    catch (error) {
        console.log("error in delete Info admin", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export const getInfo = async (req, res) => {
    try {
        const data = await prisma.info.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        if (!data)
            return res.status(409).json({ error: `Cannot get Data` });
        res.status(200).json({ payload: data });
    }
    catch (error) {
        console.log("error in get Info admin", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
