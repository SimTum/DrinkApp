import jwt from "jsonwebtoken"

export const auth = (req, res, next) => {
    const header = req.headers.authorization
    console.log(header);
    

    if (!header) {
        return res.status(401).json({messgae: "No token was provided"})
    }

    const token = header.replace(
        'Bearer', ''
    ).trim();

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