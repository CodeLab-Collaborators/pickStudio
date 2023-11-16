"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainError = exports.HTTP = void 0;
var HTTP;
(function (HTTP) {
    HTTP[HTTP["OK"] = 200] = "OK";
    HTTP[HTTP["CREATED"] = 201] = "CREATED";
    HTTP[HTTP["BAD_REQUEST"] = 404] = "BAD_REQUEST";
})(HTTP || (exports.HTTP = HTTP = {}));
class mainError extends Error {
    constructor(args) {
        super(args.message);
        this.success = false;
        Object.setPrototypeOf(this, new.target.prototype);
        this.message = args.message;
        this.name = args.name;
        this.status = args.status;
        if (this.success !== undefined) {
            this.success = args.success;
        }
        Error.captureStackTrace;
    }
}
exports.mainError = mainError;
