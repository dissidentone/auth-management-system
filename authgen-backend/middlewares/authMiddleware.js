const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Erişim Engellendi! Token Eksik." });
    }

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = decoded; // Kullanıcı bilgilerini request'e ekliyoruz
        next();
    } catch (error) {
        res.status(401).json({ message: "Geçersiz Token!" });
    }
};

// ✅ Yetki kontrolü için middleware
const checkRole = (roles) => {
    return (req, res, next) => {
        console.log("Kullanıcının Rolü:", req.user.role);  // Log ekleyelim
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Yetkisiz erişim!" });
        }
        next();
    };
};

module.exports = { verifyToken, checkRole };
