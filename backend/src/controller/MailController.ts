import express, { Application, Request, Response, NextFunction } from "express";
import { MailService } from "@sendgrid/mail";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// mailTemplate here

// email sending should not be here
export const sendEmail = async (req: Request, res: Response) => {
  // console.log("req", req.headers.cookie);

  let jwtToken = req.headers.cookie?.substring(4, req.headers.cookie.length);

  console.log();

  // const msg = {
  //   to: "harunabdi8@gmail.com", // Change to your recipient
  //   from: "noreply@askpdfs.io", // Change to your verified sender
  //   subject: "Sending with SendGrid is Fun",
  //   text: "and easy to do anywhere, even with Node.js",
  //   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  // };
  // sgMail
  //   .send(msg)
  //   .then(() => {
  //     console.log("Email sent");
  //   })
  //   .catch((error: any) => {
  //     console.error(error);
  //   });
};

// module.exports = { sendEmail };
