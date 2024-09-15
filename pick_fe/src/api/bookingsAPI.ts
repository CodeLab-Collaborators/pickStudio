import axios from "axios";

const URL: string = "https://pick-be.onrender.com/api/v1";
const Test_URL: string = "http://localhost:3300/api/v1";

// /create-studio/:accountID

export const createStudioHistory = async (studioID: string) => {
  try {
    return await axios
      .get(`${URL}/view-studio-booking/${studioID}/`)
      .then((res: any | {}) => {
        return res.data.data;
      });
  } catch (error) {
    return error;
  }
};

export const viewUserStudioHistory = async (userID: string) => {
  try {
    return await axios
      .get(`${URL}/view-user-booking/${userID}/`)
      .then((res: any | {}) => {
        return res.data.data;
      });
  } catch (error) {
    return error;
  }
};

export const bookAStudio = async (
  userID: string,
  studioID: string,
  data: {}
) => {
  try {
    return await axios
      .post(`${URL}/create-booking/${userID}/${studioID}`, data)
      .then((res: any | {}) => {
        return res.data.data;
      });
  } catch (error) {
    return error;
  }
};

export const makePaymentForStudio = async (data: {}) => {
  try {
    return await axios
      .post(`${URL}/make-payment`, data)
      .then((res: any | {}) => {
        return res.data.data;
      });
  } catch (error) {
    return error;
  }
};

export const verifyPaymentForStudio = async (trxref: string) => {
  try {
    return await axios.get(`${URL}/verify/${trxref}`).then((res: any | {}) => {
      return res.data.data;
    });
  } catch (error) {
    return error;
  }
};
