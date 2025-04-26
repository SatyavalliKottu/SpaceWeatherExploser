const nodemailer = require("nodemailer");
// require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: "divyasatyavallik@gmail.com", // ✅ Replace with your actual email address
  subject: "Test Email",
  text: "This is a test email from Node.js using Nodemailer.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("🚨 Email send failed:", error);
  } else {
    console.log("✅ Test Email sent:", info.response);
  }
});
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Not Loaded");
