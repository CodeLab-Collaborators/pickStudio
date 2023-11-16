"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const statusEnums_1 = require("./utils/statusEnums");
const mianError_1 = require("./error/mianError");
const handleError_1 = require("./error/handleError");
const authRouter_1 = __importDefault(require("./router/authRouter"));
const mainApp = (app) => {
    try {
        app.use("/api/v1", authRouter_1.default);
        app.get("/", (req, res) => {
            try {
                return res.status(statusEnums_1.status.OK).json({
                    message: "Welcome to Pick a Studio API",
                });
            }
            catch (error) {
                return res.status(statusEnums_1.status.BAD).json({
                    message: "Error reading default route",
                });
            }
        });
        app.all("*", (req, res, next) => {
            next(new mianError_1.mainError({
                name: `Route Error`,
                message: `Route Error: because the page, ${req.originalUrl} doesn't exist`,
                status: mianError_1.HTTP.BAD_REQUEST,
                success: false,
            }));
        });
        app.use(handleError_1.handleError);
    }
    catch (error) {
        console.log(error);
    }
};
exports.mainApp = mainApp;
