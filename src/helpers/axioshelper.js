import axios from "axios";
const rootUrlAPI = "http://localhost:8000/api/v1";
const adminEP = rootUrlAPI + "/admin";
export const postUser = async (usrObj) => {
  try {
    const { data } = await axios.post(adminEP, usrObj);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};
