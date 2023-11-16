"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verified = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verified = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (token) {
            jsonwebtoken_1.default.verify(token, "secret", (error, payload) => {
                if (error) {
                    return error;
                }
                else {
                    req.user = payload;
                    next();
                }
            });
        }
        else {
            return res.status(404).json({
                message: "You don't have this Access right",
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "Error",
        });
    }
};
exports.verified = verified;
