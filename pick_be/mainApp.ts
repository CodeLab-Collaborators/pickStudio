import { Application, NextFunction, Request, Response } from "express";
import { status } from "./utils/statusEnums";
import { HTTP, mainError } from "./error/mianError";
import { handleError } from "./error/handleError";
import auth from "./router/authRouter";
import jwt from "jsonwebtoken";
import passport from "passport";

export const mainApp = (app: Application) => {
  try {
    app.use("/api/v1", auth);

    app.get(
      "/auth/google/",
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

    app.get("/", (req: Request, res: Response) => {
      try {
        return res.status(status.OK).json({
          message: "Welcome to Pick a Studio API",
        });
      } catch (error) {
        return res.status(status.BAD).json({
          message: "Error reading default route",
        });
      }
    });

    app.all("*", (req: Request, res: Response, next: NextFunction) => {
      next(
        new mainError({
          name: `Route Error`,
          message: `Route Error: because the page, ${req.originalUrl} doesn't exist`,
          status: HTTP.BAD_REQUEST,
          success: false,
        })
      );
    });

    app.use(handleError);
  } catch (error) {
    console.log(error);
  }
};
