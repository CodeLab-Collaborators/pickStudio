import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { dbConfig } from "./utils/dbConfig";
import cookieSession from "cookie-session";
import passport from "passport";
import "./utils/socialAuth";
import { mainApp } from "./mainApp";

const app: Application = express();
const port: number | string = process.env.PORT || 3300;

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

mainApp(app);

// app.get(
//   "/api/auth/google/",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

app.listen(port, () => {
  console.clear();
  dbConfig();
});
