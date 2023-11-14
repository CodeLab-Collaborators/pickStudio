import { connect } from "mongoose";

const URL: string = "mongodb://127.0.0.1:27017/pickDB";

export const dbConfig = async () => {
  try {
    await connect(URL).then(() => {
      console.log("Database is now connected...🚀🚀🚀");
    });
  } catch (error) {
    console.log(error);
  }
};
