import { sendEmail } from "../controller/MailController";
import express from "express";
const router = express.Router();

router.route("/").get(sendEmail);

module.exports = router;
