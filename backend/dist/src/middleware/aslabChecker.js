const aslabChecker = async (req, res, next) => {
    try {
        if (req.user?.role === 1) {
            return res.status(401).json({ error: "UnAuthorized - Only 'Aslab' can access this method" });
        }
        next();
    }
    catch (error) {
        console.log('Error in aslabChecker handler', error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export default aslabChecker;
