import axios from "axios";

const URL: string = "https://pick-be.onrender.com/api/v1";

// /create-studio/:accountID

export const createAStudio = async (userID: string, data: any) => {
  try {
    const config: any = {
      "Content-Type": "multipart/form-data",
    };
    return await axios
      .post(`${URL}/create-studio/${userID}`, data, config)
      .then((res: any | {}) => {
        return res.data.data;
      });
  } catch (error) {
    return error;
  }
};

export const getAllStudio = async () => {
  try {
    return await axios.get(`${URL}/view-all-studio/`).then((res: any | {}) => {
      return res.data.data;
    });
  } catch (error) {
    return error;
  }
};

export const getSingleStudio = async (accountID: string) => {
  try {
    return await axios
      .get(`${URL}/view-studio/${accountID}/`)
      .then((res: any | {}) => {
        return res.data.data;
      });
  } catch (error) {
    return error;
  }
};
// add-studio-image/:accountID/
export const addStudioImages = async (
  accountID: string,
  studioID: string,
  formData: any
) => {
  try {
    const config: any = {
      "Content-Type": "multipart/form-data",
    };

    return await axios
      .post(
        `https://pick-be.onrender.com/api/v1/add-studio-image/${accountID}/${studioID}`,

        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res: any | {}) => {
        return res.data.data;
      });
  } catch (error) {
    return error;
  }
};
