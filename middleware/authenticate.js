import jwt from "jsonwebtoken"

export default auth = (req, res, next) => {
    const header = req.header.authorization

    if (!header) {
        return res.status(401).json({messgae: "No token was provided"})
    }

    const token = header.replace(
        'Bearer', ''
    );

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET,
        );
        req.userId = decoded.id
        next();
    }
    catch(error) {
        res.status(401).json({message: 'Invalid token'});
    }
}