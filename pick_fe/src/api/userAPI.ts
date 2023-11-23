import axios from "axios";

const URL: string = "https://pick-be.onrender.com/api/v1";

export const getOneUser = async (userID: string) => {
  try {
    return await axios
      .get(`${URL}/one-user/${userID}`)
      .then((res: any | {}) => {
        return res.data.data;
      });
  } catch (error) {
    return error;
  }
};
