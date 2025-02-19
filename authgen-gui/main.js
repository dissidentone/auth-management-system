const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const axios = require("axios");

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile("index.html");

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

// ✅ Register (Kayıt Ol)
ipcMain.handle("register", async (event, userData) => {
    try {
        const response = await axios.post("http://localhost:5000/auth/register", userData);
        return response.data;
    } catch (error) {
        return { error: error.response?.data?.message || "Kayıt başarısız!" };
    }
});

// ✅ Login (Giriş Yap)
ipcMain.handle("login", async (event, credentials) => {
    try {
        const response = await axios.post("http://localhost:5000/auth/login", credentials);
        return response.data;
    } catch (error) {
        return { error: error.response?.data?.message || "Giriş başarısız!" };
    }
});
