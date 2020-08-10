const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config()
let transporter = nodemailer.createTransport({
  host: "mail.codeit.al",
  port: 465,
  secure: true,
  auth: {
    user: process.env.email, // your email address to send email from
    pass: process.env.password // your gmail account password
  }
});


module.exports = transporter;
