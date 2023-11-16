"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const dbConfig_1 = require("./utils/dbConfig");
const cookie_session_1 = __importDefault(require("cookie-session"));
const passport_1 = __importDefault(require("passport"));
require("./utils/socialAuth");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mainApp_1 = require("./mainApp");
const app = (0, express_1.default)();
const port = process.env.PORT || 3300;
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
}));
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("dev"));
passport_1.default.serializeUser((user, done) => {
    done(null, user);
});
passport_1.default.deserializeUser((user, done) => {
    done(null, user);
});
app
    .use((0, cookie_session_1.default)({
    name: `pickStudio`,
    keys: ["pickStudio"],
    maxAge: 2 * 60 * 60 * 100,
}))
    .use((req, res, next) => {
    if (req.session && !req.session.regenerate) {
        req.session.regenerate = (cb) => {
            cb();
        };
    }
    if (req.session && !req.session.save) {
        req.session.save = (cb) => {
            cb();
        };
    }
    next();
})
    .use(passport_1.default.initialize())
    .use(passport_1.default.session());
(0, mainApp_1.mainApp)(app);
app.get("/auth/google", passport_1.default.authenticate("google", { scope: ["profile", "email"] }));
app.get("/auth/google/callback", passport_1.default.authenticate("google", { failureRedirect: "/login" }), function (req, res) {
    // Successful authentication, redirect home.
    // res.redirect("/");
    const user = req.user;
    const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, "secret");
    res.status(200).json({
        message: "Well done...!",
        data: token,
    });
});
app.listen(port, () => {
    console.clear();
    (0, dbConfig_1.dbConfig)();
});
