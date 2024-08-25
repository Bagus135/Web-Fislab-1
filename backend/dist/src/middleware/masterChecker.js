const masterChecker = (req, res, next) => {
    try {
        if (req.user.role < 4) {
            return res.status(401).json({ error: 'Unauthorized - Only "Admin" can access this method' });
        }
        next();
    }
    catch (error) {
        console.log("Error in masterChecker handler", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export default masterChecker;
