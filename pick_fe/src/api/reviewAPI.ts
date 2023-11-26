import axios from "axios";

const URL: string = "https://pick-be.onrender.com/api/v1";
// create-review-studio/:accountID/:studioID

export const createReeviews = async (userID: string, studioID: string) => {
  try {
    return await axios
      .post(`${URL}/create-review-studio/${userID}/${studioID}`)
      .then((res: any | {}) => {
        return res.data.data;
      });
  } catch (error) {
    return error;
  }
};

export const readReeviews = async (studioID: string) => {
  try {
    return await axios
      .get(`${URL}/get-review-studio/${studioID}`)
      .then((res: any | {}) => {
        return res.data.data;
      });
  } catch (error) {
    return error;
  }
};

export const deleteReeviews = async (
  userID: string,
  studioID: string,
  reviewID: string
) => {
  try {
    return await axios
      .delete(`${URL}/delete-review-studio/${userID}/${studioID}/${reviewID}`)
      .then((res: any | {}) => {
        return res.data.data;
      });
  } catch (error) {
    return error;
  }
};
