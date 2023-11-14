import { Request, Response } from "express";
import { status } from "../utils/statusEnums";
import bcrypt from "bcrypt";
import crypto from "crypto";
import authModel from "../model/authModel";
import { verifyEmail } from "../utils/email";

export const createAuth = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    let token = crypto.randomBytes(256).toString("hex");

    const user = await authModel.create({
      email,
      password: hash,
      verifyToken: token,
    });

    return res.status(status.CREATED).json({
      message: "user created but check your email for further verification",
    });
  } catch (error) {
    return res.status(status.BAD).json({
      message: "Error creating user",
    });
  }
};

export const readAllAuth = async (req: Request, res: Response) => {
  try {
    const user = await authModel.find();

    return res.status(status.OK).json({
      message: "all users read",
      data: user,
    });
  } catch (error) {
    return res.status(status.BAD).json({
      message: "Error creating user",
    });
  }
};

export const readOneAuth = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const user = await authModel.findById(userID);

    return res.status(status.OK).json({
      message: "one users read",
      data: user,
    });
  } catch (error) {
    return res.status(status.BAD).json({
      message: "Error creating user",
    });
  }
};

export const updateOneAuthInfo = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const { userName, fullName } = req.body;
    const user = await authModel.findByIdAndUpdate(
      userID,
      {
        userName,
        fullName,
      },
      { new: true }
    );

    return res.status(status.OK).json({
      message: "one users read",
      data: user,
    });
  } catch (error) {
    return res.status(status.BAD).json({
      message: "Error creating user",
    });
  }
};

export const updateOneAuthAvatar = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const { userName, fullName } = req.body;

    const user = await authModel.findByIdAndUpdate(
      userID,
      {
        userName,
        fullName,
      },
      { new: true }
    );

    verifyEmail(user).then(() => {
      console.log("check your mail...");
    });

    return res.status(status.OK).json({
      message: "one users read",
      data: user,
    });
  } catch (error) {
    return res.status(status.BAD).json({
      message: "Error creating user",
    });
  }
};
