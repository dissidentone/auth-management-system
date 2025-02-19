require("dotenv").config();
const express = require("express");
const cors = require("cors");
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 5000;
const authRoutes = require("./routes/auth");

// Middleware'ler (ÖNCE bunları çalıştır)
app.use(cors());  
app.use(compression()); 
app.use(express.json()); // JSON verisini okumayı sağlar (ÖNEMLİ: Önce gelmeli!)
app.use(express.urlencoded({ extended: true }));

// Auth route'ları en son ekle
app.use("/auth", authRoutes);

// Test endpoint'i
app.get("/", (req, res) => {
    res.send("AuthGen Backend Çalışıyor! 🚀");
});

// Sunucuyu başlat
app.listen(PORT, () => {
    console.log(`🚀 Sunucu ${PORT} portunda çalışıyor...`);
});
