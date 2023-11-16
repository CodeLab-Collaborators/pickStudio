"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
var status;
(function (status) {
    status[status["OK"] = 200] = "OK";
    status[status["CREATED"] = 201] = "CREATED";
    status[status["BAD"] = 404] = "BAD";
})(status || (exports.status = status = {}));
