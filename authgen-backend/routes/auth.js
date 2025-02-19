const express = require("express");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/jwt");
const { users } = require("../models/user");
const { verifyToken, checkRole } = require("../middlewares/authMiddleware");

const router = express.Router();

// ✅ Kayıt olma
router.post("/register", async (req, res) => {
    const { username, password, role } = req.body;

    if (!username || !password || !role) {
        return res.status(400).json({ message: "Kullanıcı adı, şifre ve rol gereklidir!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: users.length + 1, username, password: hashedPassword, role };
    users.push(newUser);

    res.json({ message: "Kayıt başarılı!", user: { id: newUser.id, username: newUser.username, role: newUser.role } });
});


// ✅ Giriş yapma (Login)
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Geçersiz kullanıcı adı veya şifre!" });
    }

    const token = generateToken(user);
    res.json({ message: "Giriş başarılı!", token });
});

// ✅ Korumalı Route (Sadece giriş yapan kullanıcılar erişebilir)
router.get("/profile", verifyToken, (req, res) => {
    res.json({ message: "Profil Bilgileri", user: req.user });
});


// ✅ Sadece admin'lerin erişebileceği route
router.get("/admin", verifyToken, checkRole(["admin"]), (req, res) => {
    res.json({ message: "Admin paneline hoş geldiniz!", user: req.user });
});


module.exports = router;
