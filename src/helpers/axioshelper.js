import axios from "axios";
const rootUrlAPI = "http://localhost:8000/api/v1";
const adminEP = rootUrlAPI + "/admin";
const catEP = rootUrlAPI + "/category";

const apiprocessor = async ({ method, url, dataObj }) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: dataObj,
    });
    return data;
  } catch (error) {
    let message = error.message;
    if (error.response && error.response.data) {
      message = error.response.data.message;
    }
    return {
      status: "error",
      message,
    };
  }
};
// ================admin section ===============
export const postUser = async (dataObj) => {
  const url = adminEP;
  return apiprocessor({ method: "post", url, dataObj });
};

export const postEmailVerification = async (dataObj) => {
  const url = adminEP + "/email-verification";
  return apiprocessor({ method: "post", url, dataObj });
};
export const loginUser = (dataObj) => {
  const url = adminEP + "/login";
  return apiprocessor({ method: "post", url, dataObj });
};
// =============categories api =======================
export const getCategories = () => {
  const url = catEP;
  return apiprocessor({ method: "get", url });
};
export const postCategories = (dataObj) => {
  const url = catEP;
  return apiprocessor({ method: "post", url, dataObj });
};
export const deleteCategory = (_id) => {
  const url = catEP;
  return apiprocessor({ method: "delete", url, dataObj: { _id } });
};
