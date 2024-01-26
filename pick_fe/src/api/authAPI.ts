import axios from "axios";

// const URL: string = "http://localhost:3300/api/v1";
const URL: string = "https://pick-be.onrender.com/api/v1";

const URLSocialDetail: string =
  "https://pick-be.onrender.com/api/v1/sign-in/success";

const URLSocial: string = "http://localhost:3300/api/v1/auth/google";
// const URLSocial: string = "https://pick-be.onrender.com/api/v1/auth/google";

export const signWithGoogle = async () => {
  window.open(URLSocial, "_self");
};

export const createAccount = async (data: any) => {
  try {
    return await axios.post(`${URL}/create-user`, data).then((res) => {
      return res;
    });
  } catch (error) {
    return error;
  }
};

export const getSigninAccount = async () => {
  try {
    return await axios.get(`${URLSocialDetail}`).then((res) => {
      return res.data;
    });
  } catch (error: any) {
    return error.message;
  }
};

export const verifyAccount = async (data: any) => {
  try {
    return await axios
      .post(`https://pick-be.onrender.com/api/v1/verify-user`, { code: data })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const signinAccount = async (data: any) => {
  try {
    return await axios.post(`${URL}/sign-user`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const allAccount = async () => {
  return await axios.get(`${URL}/all-user`).then((res) => {
    return res.data;
  });
};

export const showAccount = async () => {
  return await axios.get(`${URLSocialDetail}`).then((res) => {
    return res.data;
  });
};
