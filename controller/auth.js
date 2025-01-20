const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "Authentication header is missing" });
    }

    const token = authHeader.split(" ")[1]; 

    if (!token) {
        return res.status(401).json({ message: "Token is missing" });
    }

    try {
        const dat = jwt.verify(token, process.env.Jwt_key); 
        req.user = dat; 
        next(); 
    } catch (error) {
        console.error("JWT verification error:", error);
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};

module.exports = authentication;
