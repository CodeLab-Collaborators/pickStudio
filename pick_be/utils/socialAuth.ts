import passport from "passport";
import GoogleStrate from "passport-google-oauth20";

const GoogleStrategy = require("passport-google-oauth20").Strategy;

import decode from "jwt-decode";
import authModel from "../model/authModel";

const GOOGLE_CLIENT_ID =
  "199704572461-mqftjmpvtc6k62t49ki4mshaocr0e6hf.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async function (
      accessToken: any,
      refreshToken: any,
      profile: any,
      callback: any
    ) {
      try {
        if (profile.id_token) {
          //   const data: any = decode(profile.id_token);
          const data: any = "";
          console.log(data);
          if (data) {
            const user = await authModel.findOne({
              email: data.email,
            });

            if (user) {
              return callback(null, user);
            } else {
              const newUser = await authModel.create({
                data: {
                  email: data.email,
                  password: "",
                  secretKey: "er45",
                  token: "",
                  verify: data.email_verified,
                  //   studio: [],
                },
              });

              return callback(null, newUser);
            }
          } else {
            console.log("check Token...");
          }
        } else {
          const user = await authModel.findOne({
            email: profile._json.email,
          });

          if (user) {
            return callback(null, user);
          } else {
            const newUser = await authModel.create({
              data: {
                email: profile._json.email,
                password: "",
                secretKey: "er45",
                token: "",
                verify: true,
                // studio: [],
              },
            });

            return callback(null, newUser);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  )
);
