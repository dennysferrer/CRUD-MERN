import jwt from 'jsonwebtoken';

export const authRequired = async (req, res, next) => {
    const { token } = req.cookies
    if (!token) {
        return res.status(401).json({message: "Authentication required"})
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({message: "Authentication failed"})
        }
        req.user = decoded;
        next()
    })
}