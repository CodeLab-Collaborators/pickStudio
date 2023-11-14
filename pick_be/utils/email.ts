import nodemailer from "nodemailer";
import ejs from "ejs";
import jwt from "jsonwebtoken";
import path from "path";
import { google } from "googleapis";

const googleID =
  "848542784186-9os7noa7qvcg3nckfu38s3bhob8u6oga.apps.googleusercontent.com";
const googleSECRET = "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";
const googleREFRESH =
  "1//04GgN8ydoI_ZdCgYIARAAGAQSNwF-L9IrKCOkFE95PncupZNTb3WCiygNcFb1vp20oW-1SMJTKzSWxnWw2B6nf4S85GXSTpgR44M";
const googleREDIRECT = "https://developer.google.com/oauthplayground";

const oAuth = new google.auth.OAuth2(googleID, googleSECRET, googleREDIRECT);
oAuth.setCredentials({ access_token: googleREDIRECT });

const URL: string = "http://localhost:2244";

export const verifyEmail = async (account: any) => {
  try {
    const accessToken: any = (await oAuth.getAccessToken()).token;

    const transport = nodemailer.createTransport({
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

    const token = jwt.sign({ id: account.id }, "lock");

    const dataSend = {
      url: `${URL}/api/${token}/verify-account`,
      userName: account?.userName,
      code: account.secretKey,
    };

    const readData = path.join(__dirname, "../views/verifyMail.ejs");
    const data = await ejs.renderFile(readData, dataSend);

    const mailer = {
      from: "Account Opening 🚀🚀🚀 <codelabbest@gmail.com>",
      to: account.email,
      subject: "Account Openning Verification",
      html: data,
    };

    transport.sendMail(mailer);
  } catch (error) {
    console.log(error);
  }
};
