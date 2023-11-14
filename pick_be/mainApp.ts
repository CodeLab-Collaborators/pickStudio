import { Application, Request, Response } from "express";
import { status } from "./utils/statusEnums";

export const mainApp = (app: Application) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};
