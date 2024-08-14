import { sendEmail } from "../controller/MailController";
import express from "express";
const router = express.Router();

router.route("/sendMail").get(sendEmail);

export default router;
