import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verified = (req: any, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    if (token) {
      jwt.verify(token, "secret", (error: any, payload: any) => {
        if (error) {
          return error;
        } else {
          req.user = payload;
          next();
        }
      });
    } else {
      return res.status(404).json({
        message: "You don't have this Access right",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};
