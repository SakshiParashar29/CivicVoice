import {verifyToken} from "../Utils/jwt.js"
import ApiError from "../Utils/ApiError.js"

export const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if(!token)
        return res.status(400).json(new ApiError(400, "No token provided", null));

    try {
        const decoded = verifyToken(token);

        req.user = decoded;
        next();
        
    } catch (error) {
        return res.stauts(500).send(new ApiError(500, error.message, null));
    }
}