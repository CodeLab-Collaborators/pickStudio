"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const authController_1 = require("../controller/authController");
const upload = (0, multer_1.default)().single("avatar");
const router = (0, express_1.Router)();
router.route("/one-user/:userID").get(authController_1.readOneAuth);
router.route("/all-user").get(authController_1.readAllAuth);
router.route("/sign-user").post(authController_1.signInUser);
router.route("/create-user").post(authController_1.createAuth);
router.route("/verify-user/:userID").get(authController_1.verifyUser);
router.route("/update-one-user/:userID").patch(upload, authController_1.updateOneAuthAvatar);
router.route("/update-one-user-info/:userID").patch(authController_1.updateOneAuthInfo);
exports.default = router;
