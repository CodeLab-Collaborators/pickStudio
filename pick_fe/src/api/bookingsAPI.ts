import axios from "axios";

const URL: string = "https://pick-be.onrender.com/api/v1";

// /create-studio/:accountID

export const createStudioHistory = async (studioID: string) => {
  try {
    return await axios
      .get(`${URL}/view-studio-booking/${studioID}`)
      .then((res: any | {}) => {
        return res.data.data;
      });
  } catch (error) {
    return error;
  }
};
