import jwt from 'jsonwebtoken';
const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.jwtSecret, { expiresIn: '1d' });
    res.cookie('jwt', token, {
        maxAge : 1 * 24* 60 * 60 * 1000,
        httpOnly : true,
        secure : true,
        sameSite : 'strict',
        domain : '.vercel.app',
        path : '/',
    });
};
export default generateToken;
