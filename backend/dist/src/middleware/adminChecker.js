const adminChecker = (req, res, next) => {
    try {
        if (req.user.role < 3) {
            return res.status(401).json({ error: 'Unauthorized - Only "Koor" and "Admin" can access this method' });
        }
        next();
    }
    catch (error) {
        console.log("Error in adminChecker handler", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export default adminChecker;
