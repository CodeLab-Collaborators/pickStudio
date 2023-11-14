import express, { Application, NextFunction, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { dbConfig } from "./utils/dbConfig";
import cookieSession from "cookie-session";
import passport from "passport";
import "./utils/socialAuth";
import jwt from "jsonwebtoken";

const app: Application = express();
const port: number | string = process.env.PORT || 2244;

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

app.use(helmet());
app.use(morgan("dev"));

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user!);
});

app
  .use(
    cookieSession({
      name: `pickStudio`,
      keys: ["pickStudio"],
      maxAge: 2 * 60 * 60 * 100,
    })
  )

  .use((req: any, res: Response, next: NextFunction) => {
    if (req.session && !req.session.regenerate) {
      req.session.regenerate = (cb: any) => {
        cb();
      };
    }
    if (req.session && !req.session.save) {
      req.session.save = (cb: any) => {
        cb();
      };
    }
    next();
  })
  .use(passport.initialize())
  .use(passport.session());

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    // res.redirect("/");
    const user: any = req.user;

    const token = jwt.sign({ id: user.id, email: user.email }, "secret");

    res.status(200).json({
      message: "Well done...!",
      data: token,
    });
  }
);

app.listen(port, () => {
  console.clear();
  dbConfig();
});
