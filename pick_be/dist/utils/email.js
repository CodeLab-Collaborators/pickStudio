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
exports.verifyEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const ejs_1 = __importDefault(require("ejs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const path_1 = __importDefault(require("path"));
const googleapis_1 = require("googleapis");
const googleID = "848542784186-9os7noa7qvcg3nckfu38s3bhob8u6oga.apps.googleusercontent.com";
const googleSECRET = "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";
const googleREFRESH = "1//04GgN8ydoI_ZdCgYIARAAGAQSNwF-L9IrKCOkFE95PncupZNTb3WCiygNcFb1vp20oW-1SMJTKzSWxnWw2B6nf4S85GXSTpgR44M";
const googleREDIRECT = "https://developer.google.com/oauthplayground";
const oAuth = new googleapis_1.google.auth.OAuth2(googleID, googleSECRET, googleREDIRECT);
oAuth.setCredentials({ access_token: googleREDIRECT });
const URL = "http://localhost:2244";
const verifyEmail = (account) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accessToken = (yield oAuth.getAccessToken()).token;
        const transport = nodemailer_1.default.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "codelabbest@gmail.com",
                clientId: googleID,
                clientSecret: googleSECRET,
                refreshToken: googleREFRESH,
                accessToken: accessToken,
            },
        });
        const token = jsonwebtoken_1.default.sign({ id: account.id }, "lock");
        const dataSend = {
            url: `${URL}/api/${token}/verify-account`,
            userName: account === null || account === void 0 ? void 0 : account.userName,
            code: account.secretKey,
        };
        const readData = path_1.default.join(__dirname, "../views/verifyMail.ejs");
        const data = yield ejs_1.default.renderFile(readData, dataSend);
        const mailer = {
            from: "Account Opening 🚀🚀🚀 <codelabbest@gmail.com>",
            to: account.email,
            subject: "Account Openning Verification",
            html: data,
        };
        transport.sendMail(mailer);
    }
    catch (error) {
        console.log(error);
    }
});
exports.verifyEmail = verifyEmail;
