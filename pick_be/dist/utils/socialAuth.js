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
const passport_1 = __importDefault(require("passport"));
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const authModel_1 = __importDefault(require("../model/authModel"));
const GOOGLE_CLIENT_ID = "199704572461-mqftjmpvtc6k62t49ki4mshaocr0e6hf.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
// const GOOGLE_CLIENT_ID =
//   "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";
// const GOOGLE_CLIENT_SECRET = "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";
passport_1.default.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    scope: ["profile", "email"],
}, function (accessToken, refreshToken, profile, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(profile);
            console.log(profile.email);
            let email = profile.email;
            const user = yield authModel_1.default.findOne(email);
            if (user !== null) {
                return callback(null, user);
            }
            else {
                const newUser = yield authModel_1.default.create({
                    email: profile.emails[0].value,
                    fullName: profile.displayName,
                    userName: profile.name.familyName,
                    avatar: profile.photos[0].value,
                    password: "",
                    verifyToken: "",
                    verify: true,
                    studio: [],
                });
                return callback(null, newUser);
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}));
