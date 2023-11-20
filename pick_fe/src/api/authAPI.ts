import axios from "axios";

const URL: string = "https://pick-be.onrender.com/api/v1";
// const URLSocial: string = "https://pick-be.onrender.com/api/v1/auth/google";
const URLSocialDetail: string =
  "https://pick-be.onrender.com/api/v1/sign-in/success";
const URLSocial: string = "http://localhost:3300/api/v1/auth/google";
const URLSocialDet: string = "http://localhost:3300/api/v1/sign-in/success";

export const signWithGoogle = async () => {
  window.open(URLSocial, "_self");
};

export const createAccount = async (data: any) => {
  return await axios.post(`${URL}/create-user`, data).then((res) => {
    return res.data;
  });
};

export const getSigninAccount = async () => {
  try {
    return await axios.get(`${URLSocialDet}`).then((res) => {
      console.log("show me: ", res);
      // return res.data;
    });
  } catch (error: any) {
    console.log(error.message);
  }
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
