import express, { Request, Response } from "express";

const app = express();

const port: number = 3000;

import sgMail from "@sendgrid/mail";
sgMail.setApiKey();

app.listen(port, () => {
  console.log("Server is running on portttt ", port);
});

const msg = {
  to: "harunabdi8@gmail.com", // Change to your recipient
  from: "noreply@askpdfs.io", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error: any) => {
    console.error(error);
  });
