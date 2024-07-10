import axios from "axios";

// const URL: string = "http://localhost:3300/api/v1";
const URL: string = "https://pick-be.onrender.com/api/v1";

export const getOneUser = async (userID: string) => {
  try {
    return await axios.get(`${URL}/one-user/${userID}`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    return error;
  }
};

export const updateUserPhone = async (userID: string) => {
  try {
    return await axios
      .patch(`${URL}/update-one-user-phone/${userID}`)
      .then((res) => {
        return res.data.data;
      });
  } catch (error) {
    return error;
  }
};

export const updateBankAccount = async (userID: string, data: string) => {
  try {
    return await axios
      .patch(`${URL}/update-account-number/${userID}`, { bankAccount: data })
      .then((res) => {
        return res.data.data;
      });
  } catch (error) {
    return error;
  }
};

export const updateBankName = async (userID: string, data: any) => {
  try {
    return await axios
      .patch(`${URL}/update-bank-name/${userID}`, data)
      .then((res) => {
        return res.data.data;
      });
  } catch (error) {
    return error;
  }
};

export const updateBankAccountName = async (userID: string, data: string) => {
  try {
    return await axios
      .patch(`${URL}/update-account-name/${userID}`, { accountName: data })
      .then((res) => {
        return res.data.data;
      });
  } catch (error) {
    return error;
  }
};
