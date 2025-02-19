# 🔐 Auth Management System

Bu proje, **kullanıcı yönetimi, kimlik doğrulama (JWT Authentication) ve Role-Based Access Control (RBAC)** içeren bir **Backend + Electron GUI** uygulamasıdır.

## 🚀 Özellikler
✅ Kullanıcı Kayıt ve Giriş Sistemi (Register & Login)  
✅ JWT Authentication ile Kimlik Doğrulama  
✅ RBAC (Role-Based Access Control) ile Admin/User Yetkilendirme  
✅ Electron GUI ile Masaüstü Arayüzü  
✅ Express.js Backend ile REST API Desteği  

---

## 📌 Kurulum
### **Backend’i Başlat**
```sh
cd authgen-backend
npm install
node server.js

GUI’yi Başlat

cd authgen-gui
npm install
npm start

🔑 API Endpointleri
HTTPMetodu   	URL	        Açıklama
POST	/auth/register	Kullanıcı kaydı oluşturur
POST	/auth/login	Kullanıcı giriş yapar ve JWT döner
GET	/auth/profile	Giriş yapan kullanıcının bilgilerini döner
GET	/auth/admin	Sadece admin erişebilir

🎯 Kullanım
📝 Kayıt Ol
1️⃣ Kullanıcı Adı ve Şifre Gir
2️⃣ Admin veya User rolü seç
3️⃣ "Kayıt Ol" butonuna bas
4️⃣ Başarı mesajı alırsan, kayıt tamam!

🔑 Giriş Yap
1️⃣ Kayıt olduğun kullanıcı adı ve şifreyi gir
2️⃣ "Giriş Yap" butonuna bas
3️⃣ Başarı mesajı alırsan giriş başarılı!
4️⃣ JWT Token kullanarak yetkilendirilmiş route’lara erişebilirsin.

📌 Gelecekteki Geliştirmeler
🔄 Şifre Sıfırlama (Reset Password) Sistemi
🔑 JWT Refresh Token Sistemi
🗄️ Gerçek bir veritabanı bağlantısı (PostgreSQL, MongoDB)
📜 Lisans
Bu proje açık kaynak olup, MIT Lisansı altında yayınlanmıştır.

🚀 Geliştirici: Mustafa (@dissidentone)
