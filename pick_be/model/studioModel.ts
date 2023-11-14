import mongoose, { Document, Schema, model } from "mongoose";

interface iAuth {
  studioName: string;
  studioLocation: string;
  studioContact: string;
  studioImages: Array<string>;

  user: {};
}

interface iAuthData extends iAuth, Document {}

const authModel = new Schema<iAuthData>(
  {
    studioName: {
      type: String,
    },
    studioLocation: {
      type: String,
    },
    studioContact: {
      type: String,
    },
    studioImages: [
      {
        type: String,
      },
    ],

    user: {
      type: mongoose.Types.ObjectId,
      ref: "auths",
    },
  },
  {
    timestamps: true,
  }
);

export default model<iAuthData>("studioes", authModel);
