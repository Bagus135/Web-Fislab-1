import jwt from "jsonwebtoken";
import prisma from "../db/prisma.js";
const tokenChecker = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: "No Token Provided" });
        }
        const decodedJWT = jwt.verify(token, process.env.jwtSecret);
        if (!decodedJWT) {
            return res.status(401).json({ error: "Token Invalid" });
        }
        const userData = await prisma.user.findUnique({
            where: { id: decodedJWT.userId },
            select: {
                id: true,
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
                github: true,
                ig: true,
                title: true
            }
        });
        if (!userData) {
            return res.status(404).json({ error: "User not Found!! :(" });
        }
        req.user = userData;
        next();
    }
    catch (error) {
        console.log("Error in protect auth routes", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export default tokenChecker;
