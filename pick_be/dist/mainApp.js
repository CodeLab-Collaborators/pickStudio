"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const statusEnums_1 = require("./utils/statusEnums");
const mianError_1 = require("./error/mianError");
const handleError_1 = require("./error/handleError");
const mainApp = (app) => {
    try {
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
