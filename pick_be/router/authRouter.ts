import { Router } from "express";

import multer from "multer";
import {
  createAuth,
  updateOneAuthAvatar,
  readAllAuth,
  readOneAuth,
  signInUser,
  updateOneAuthInfo,
  verifyUser,
} from "../controller/authController";
const upload = multer().single("avatar");

const router = Router();

router.route("/one-user/:userID").get(readOneAuth);
router.route("/all-user").get(readAllAuth);

router.route("/sign-user").post(signInUser);
router.route("/create-user").post(createAuth);
router.route("/verify-user/:userID").get(verifyUser);

router.route("/update-one-user/:userID").patch(upload, updateOneAuthAvatar);
router.route("/update-one-user-info/:userID").patch(updateOneAuthInfo);

export default router;
