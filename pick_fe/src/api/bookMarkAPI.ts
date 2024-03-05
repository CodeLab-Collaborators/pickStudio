import axios from "axios";

const URL: string = "https://pick-be.onrender.com/api/v1";
// const URL: string = "http://localhost:3300/api/v1";
export const createBookMark = async (userID: string, studioID: string) => {
  try {
    return await axios
      .post(`${URL}/create-bookmark/${userID}/${studioID}`, { studioID })
      .then((res: any | {}) => {
        return res.data.data;
      });
  } catch (error) {
    return error;
  }
};
export const removeBookMark = async (userID: string, bookMarkID: string) => {
  try {
    return await axios
      .delete(`${URL}/remove-bookmark/${userID}/${bookMarkID}`)
      .then((res: any | {}) => {
        return res.data.data;
      });
  } catch (error) {
    return error;
  }
};

export const viewBookMark = async (userID: string) => {
  try {
    return await axios
      .get(`${URL}/view-bookmark/${userID}/`)
      .then((res: any | {}) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};
