"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socialController_1 = require("../controller/socialController");
const router = express_1.default.Router();
router.route("/auth/google").get(socialController_1.socialAuth);
router.route("/auth/google/callback").get(socialController_1.socialAuthFinal);
exports.default = router;
