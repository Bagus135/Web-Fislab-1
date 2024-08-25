import prisma from "../db/prisma.js";
export const getSchedule = async (req, res) => {
    try {
        const orderSchedule = await prisma.weekSchedule.findMany({
            where: {
                kelompokId: Number(req.praktikan.kelompok)
            },
            include: {
                JudulAslab: true,
                Schedule: true
            }, orderBy: {
                week: "asc"
            }
        });
        if (!orderSchedule) {
            return res.status(404).json({ error: "Your Schedule is not found" });
        }
        res.status(200).json({
            payload: orderSchedule
        });
    }
    catch (err) {
        console.log("Error in handler schedule praktikan", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export const getNilai = async (req, res) => {
    try {
        const id = req.user.id;
        const getNilaiUser = await prisma.nilai.findUnique({
            where: { userID: id },
            include: {
                praktikum1: true,
                praktikum2: true,
                praktikum3: true,
                praktikum4: true,
                praktikum5: true,
                praktikum6: true,
                praktikum7: true,
                praktikum8: true,
                praktikum9: true,
                praktikum10: true,
            }
        });
        if (!getNilaiUser) {
            return res.status(404).json({ error: "Data is not Found" });
        }
        res.status(200).json({ payload: getNilaiUser });
    }
    catch (error) {
        console.log("Error in getNilai Handler Praktikan", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
