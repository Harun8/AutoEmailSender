import { signup, login, getUser } from "../controller/AuthController";
import express from "express";
const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/getUser").get(getUser);

export default router;
