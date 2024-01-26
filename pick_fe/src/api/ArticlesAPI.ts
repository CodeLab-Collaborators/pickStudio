import axios from "axios";

const URL: string = "https://pick-be.onrender.com/api/v1";
export const readArticle = async () => {
  try {
    return await axios.get(`${URL}/read-article`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    return error;
  }
};
export const readOneArticle = async (articleID: string) => {
  try {
    return await axios
      .get(`${URL}/read-one-article/${articleID}`)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
