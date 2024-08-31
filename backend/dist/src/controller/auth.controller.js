import prisma from "../db/prisma.js";
import generateToken from "../utils/jwt.js";
export const signUp = async (req, res) => {
    try {
        const { fullname, nrp, password, confirmPassword, gender } = req.body;
        if (!fullname || !nrp || !password || !confirmPassword || !gender) {
            return res.status(422).json({ error: 'Please fill in all fields :)' });
        }
        if (password !== confirmPassword) {
            return res.status(401).json({ error: "Password dont match !!!" });
        }
        /// Validator
        const user = await prisma.user.findUnique({
            where: { nrp }
        });
        if (user) {
            return res.status(403).json({ error: "The username is already exist :)" });
        }
        const newUser = await prisma.user.create({
            data: {
                fullname,
                nrp,
                password,
                gender
            },
        });
        if (newUser) {
            res.status(200).json({
                payload: {
                    id: newUser.id,
                    fullname: newUser.fullname,
                    nrp: newUser.nrp,
                    role: newUser.role
                },
                message: "Account User is Successfully Created :) "
            });
        }
        else {
            res.status(409).json({ error: "invalid user data :' " });
        }
    }
    catch (error) {
        console.log('Error in signUp controller', error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export const login = async (req, res) => {
    try {
        const { nrp, password } = req.body;
        if (!nrp || !password) {
            return res.status(422).json({ error: "Please fill the all fields" });
        }
        const user = await prisma.user.findUnique({
            where: { nrp }
        });
        if (!user) {
            return res.status(404).json({ error: "User Not Found!!" });
        }
        const comparePass = password === user?.password;
        if (!comparePass) {
            return res.status(403).json({ error: "Your password is incorrect!! :( " });
        }
        generateToken(user?.id, res);
        res.status(200).json({
            payload: {
                id: user.id,
                nrp: user.nrp,
                fullname: user.fullname,
                nickname: user.nickname,
                description: user.description,
                gender: user.gender,
                role: user.role,
                contact: user.contact,
                profilPic: user.profilPic,
                email: user.email,
                createdAt: user.createdAt,
                updateAt: user.updateAt,
                github: user.github,
                ig: user.ig,
                title: user.title,
            },
            message: "Login Successfully"
        });
    }
    catch (error) {
        console.log("Error in Login Handler", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export const logout = async (req, res) => {
    try {
        res.clearCookie('jwt', {
            httpOnly : true,
            secure : true,
            sameSite : 'none',
            domain : 'web-fislab-1.vercel.app',
            path : '/'
        });
        res.status(200).json({ message: "Logged Out Succesfully" });
    }
    catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export const getMe = (req, res) => {
    try {
        res.json({ payload: req.user });
    }
    catch (error) {
        console.error("error in getMe Controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export const changePass = async (req, res) => {
    try {
        const { uid: idUser } = req.params;
        const { password, newPassword } = req.body;
        if (!password || !newPassword) {
            return res.status(422).json({ error: "Please fill the all fields" });
        }
        const user = await prisma.user.findUnique({
            where: { id: idUser }
        });
        if (!user) {
            return res.status(404).json({ error: "User Not Found!!" });
        }
        const comparePass = password === user?.password;
        if (!comparePass) {
            return res.status(403).json({ error: "Your password is incorrect!! :( " });
        }
        const updatePass = await prisma.user.update({
            where: {
                id: idUser
            },
            data: {
                password: newPassword
            }
        });
        if (!updatePass)
            return res.status(409).json({ error: "Password not Updated!!" });
        res.status(200).json({
            message: `Password Successfully Changed!`
        });
    }
    catch (err) {
        console.error("error in changePass Controller", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
