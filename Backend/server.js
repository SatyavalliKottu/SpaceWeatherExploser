require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Firebase Admin SDK Initialization
const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT;

if (
  !serviceAccountPath ||
  !fs.existsSync(path.join(__dirname, serviceAccountPath))
) {
  console.error("🚨 Firebase service account file not found!");
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert(
    require(path.join(__dirname, serviceAccountPath))
  ),
});

// ✅ Enable CORS
app.use(
  cors({
    origin: "http://localhost:4200",
    methods: "GET,POST",
    allowedHeaders: "Content-Type",
  })
);
app.use(bodyParser.json());

// ✅ Configure Nodemailer for Email Notifications
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // Use 587 if 465 doesn't work
  secure: true, // Set to false if using port 587
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // The 16-character App Password
  },
});

// ✅ Function to Send Notification Emails
async function sendNotificationEmail(userEmail, professorEmail, type) {
  let subject, message;

  if (type === "signup") {
    subject = "🎉 New Signup Alert!";
    message = `Hello,\n\nA new user has successfully signed up: ${userEmail}.\n\nWelcome to Space Weather Explore! 🚀\n\nRegards,\nSpace Weather Explore Team`;
  } else if (type === "login") {
    subject = `🔐 Login Notification: ${userEmail}`;
    message = `Hello,\n\nThe user ${userEmail} has successfully logged in at ${new Date().toLocaleString()}.\n\nIf this wasn't you, please secure your account immediately!\n\nRegards,\nSpace Weather Explore Security Team`;
  } else {
    subject = "Notification from Space Weather Explore";
    message = `Hello,\n\nYou have received a new notification from Space Weather Explore.\n\nRegards,\nSpace Weather Explore Team`;
  }

  const mailOptions = {
    from: `Space Weather Explore <${process.env.EMAIL_USER}>`,
    to: `${userEmail}, Space Weather Explore ${professorEmail}`,
    subject: subject,
    text: message,
  };
  -console.log("📧 Attempting to send email notification...");
  // console.log(`📌 From: Space Weather Explore ${process.env.EMAIL_USER}`);
  console.log(`📌 To: ${userEmail}, ${professorEmail}`);
  console.log(`📌 Subject: ${subject}`);

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent successfully: ${info.response}`);
  } catch (error) {
    console.error("🚨 Error sending email notification:");
    console.error(`⚠️ Error Message: ${error.message}`);
    console.error(`⚠️ Stack Trace: ${error.stack}`);

    // Additional SMTP-specific error logging
    if (error.response) {
      console.error(`⚠️ SMTP Response: ${error.response}`);
    }
    if (error.code) {
      console.error(`⚠️ SMTP Error Code: ${error.code}`);
    }
    if (error.command) {
      console.error(`⚠️ SMTP Command: ${error.command}`);
    }
  }
}

// ✅ Signup API Route (With Email Notification)
app.post("/api/signup", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const userRecord = await admin.auth().createUser({ email, password });

    // ✅ Send Notification Email
    await sendNotificationEmail(email, "divyasatyavallik@gmail.com", "signup");

    res.json({ message: "Signup successful!", uid: userRecord.uid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Login API Route (With Email Notification)
app.post("/api/login", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  try {
    const user = await admin.auth().getUserByEmail(email);

    // ✅ Send Notification Email
    await sendNotificationEmail(email, "divyasatyavallik@gmail.com", "login");

    res.json({ message: "Login successful!", uid: user.uid });
  } catch (error) {
    res.status(500).json({ error: "Invalid login credentials" });
  }
});

// ✅ Logout API Route
app.post("/api/logout", (req, res) => {
  res.json({ message: "Logout successful!" });
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

console.log("🔥 ENV Variables Loaded:");
console.log("FIREBASE_SERVICE_ACCOUNT:", process.env.FIREBASE_SERVICE_ACCOUNT);
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("PORT:", process.env.PORT);
