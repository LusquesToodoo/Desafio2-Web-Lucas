import axios from "axios";

const authorization = {
  headers: {
    Authorization: `Bearer ${
      localStorage.getItem("token") || sessionStorage.getItem("token")
    }`,
  },
};

const API = async (url, key) => {
  const link = key ? url + key : url;
  let result;
  let success = false;

  await axios
    .get(link, authorization)
    .then((response) => {
      result = response;
      success = true;
    })
    .catch((error) => {
      result = error;
    });
  return [result, success];
};

export default API;
