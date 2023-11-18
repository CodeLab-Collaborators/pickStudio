import axios from "axios";

const URL: string = "https://pick-be.onrender.com/api/v1";

export const createAccount = async (data: any) => {
  return await axios.post(`${URL}/create-user`, data).then((res) => {
    return res.data;
  });
};

export const verifyAccount = async (userID: any) => {
  return await axios.post(`${URL}/verify-user/${userID}`).then((res) => {
    return res.data;
  });
};

export const signinAccount = async (data: any) => {
  return await axios.post(`${URL}/sign-user/`, data).then((res) => {
    return res.data;
  });
};
