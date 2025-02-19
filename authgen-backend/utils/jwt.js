const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, username: user.username, role: user.role }, // Role ekledik
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );
};

module.exports = { generateToken };
