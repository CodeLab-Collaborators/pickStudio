"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOneAuthAvatar = exports.updateOneAuthInfo = exports.readOneAuth = exports.readAllAuth = exports.createAuth = void 0;
const statusEnums_1 = require("../utils/statusEnums");
const bcrypt_1 = __importDefault(require("bcrypt"));
const crypto_1 = __importDefault(require("crypto"));
const authModel_1 = __importDefault(require("../model/authModel"));
const email_1 = require("../utils/email");
const createAuth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hash = yield bcrypt_1.default.hash(password, salt);
        let token = crypto_1.default.randomBytes(256).toString("hex");
        const user = yield authModel_1.default.create({
            email,
            password: hash,
            verifyToken: token,
        });
        return res.status(statusEnums_1.status.CREATED).json({
            message: "user created but check your email for further verification",
        });
    }
    catch (error) {
        return res.status(statusEnums_1.status.BAD).json({
            message: "Error creating user",
        });
    }
});
exports.createAuth = createAuth;
const readAllAuth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield authModel_1.default.find();
        return res.status(statusEnums_1.status.OK).json({
            message: "all users read",
            data: user,
        });
    }
    catch (error) {
        return res.status(statusEnums_1.status.BAD).json({
            message: "Error creating user",
        });
    }
});
exports.readAllAuth = readAllAuth;
const readOneAuth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const user = yield authModel_1.default.findById(userID);
        return res.status(statusEnums_1.status.OK).json({
            message: "one users read",
            data: user,
        });
    }
    catch (error) {
        return res.status(statusEnums_1.status.BAD).json({
            message: "Error creating user",
        });
    }
});
exports.readOneAuth = readOneAuth;
const updateOneAuthInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const { userName, fullName } = req.body;
        const user = yield authModel_1.default.findByIdAndUpdate(userID, {
            userName,
            fullName,
        }, { new: true });
        return res.status(statusEnums_1.status.OK).json({
            message: "one users read",
            data: user,
        });
    }
    catch (error) {
        return res.status(statusEnums_1.status.BAD).json({
            message: "Error creating user",
        });
    }
});
exports.updateOneAuthInfo = updateOneAuthInfo;
const updateOneAuthAvatar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const { userName, fullName } = req.body;
        const user = yield authModel_1.default.findByIdAndUpdate(userID, {
            userName,
            fullName,
        }, { new: true });
        (0, email_1.verifyEmail)(user).then(() => {
            console.log("check your mail...");
        });
        return res.status(statusEnums_1.status.OK).json({
            message: "one users read",
            data: user,
        });
    }
    catch (error) {
        return res.status(statusEnums_1.status.BAD).json({
            message: "Error creating user",
        });
    }
});
exports.updateOneAuthAvatar = updateOneAuthAvatar;
