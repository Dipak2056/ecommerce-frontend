import axios from "axios";
const rootUrlAPI = "http://localhost:8000/api/v1";
const adminEP = rootUrlAPI + "/admin";
const catEP = rootUrlAPI + "/category";
const productEP = rootUrlAPI + "/products";
const paymentMethodEp = rootUrlAPI + "/payment-method";
const customersMethodEp = rootUrlAPI + "/customers";

const apiprocessor = async ({ method, url, dataObj, headers }) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: dataObj,
      headers,
    });
    return data;
  } catch (error) {
    let message = error.message;
    if (error.response && error.response.status === "401") {
      sessionStorage.removeItem("accessJWT");
      localStorage.removeItem("refreshJWT");
      return { status: "error", message: "unauthorized!" };
    }
    if (error.response && error.response.data) {
      message = error.response.data.message;
    }
    if (message === "jwt expired!") {
      //call the api to get new refresh jwt and recall the api processor itself
      const accessJWT = await requestNewJWT();
      if (accessJWT) {
        return apiprocessor({
          method,
          url,
          dataObj,
          headers: {
            Authorization: accessJWT,
          },
        });
      }
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
//to get the user based on accesstoken
export const requestNewJWT = async () => {
  const { accessJWT } = await apiprocessor({
    method: "get",
    url: adminEP + "/accessjwt",
    headers: {
      Authorization: localStorage.getItem("refreshJWT"),
    },
  });
  sessionStorage.setItem("accessJWT", accessJWT);

  return accessJWT;
};
export const getAdminUser = async () => {
  const url = adminEP;
  return apiprocessor({
    method: "get",
    url,
    headers: { Authorization: sessionStorage.getItem("accessJWT") },
  });
};

export const postEmailVerification = async (dataObj) => {
  const url = adminEP + "/email-verification";
  return apiprocessor({ method: "post", url, dataObj });
};
export const loginUser = (dataObj) => {
  const url = adminEP + "/login";
  return apiprocessor({
    method: "post",
    url,
    dataObj,
    headers: { Authorization: sessionStorage.getItem("accessJWT") },
  });
};
//to update the admin profile
export const updateAdmin = async (dataObj) => {
  const url = adminEP;
  return apiprocessor({
    method: "put",
    url,
    dataObj,
    headers: { Authorization: sessionStorage.getItem("accessJWT") },
  });
};
//request otp
export const requestPassworResetOTP = (dataObj) => {
  const url = adminEP + "/otp-request";
  return apiprocessor({ method: "post", url, dataObj });
};
//password reset
export const updatePassword = (dataObj) => {
  const url = adminEP + "/password";
  return apiprocessor({
    method: "patch",
    url,
    dataObj,
    headers: { Authorization: sessionStorage.getItem("accessJWT") },
  });
};
export const updateAdminPasswordFromProfile = (dataObj) => {
  const url = adminEP + "/update-password";
  return apiprocessor({
    method: "patch",
    url,
    dataObj,
    headers: { Authorization: sessionStorage.getItem("accessJWT") },
  });
};
// =============categories api =======================
export const getCategories = () => {
  const url = catEP;
  return apiprocessor({
    method: "get",
    url,
    headers: { Authorization: sessionStorage.getItem("accessJWT") },
  });
};
export const postCategories = (dataObj) => {
  const url = catEP;
  return apiprocessor({
    method: "post",
    url,
    dataObj,
    headers: { Authorization: sessionStorage.getItem("accessJWT") },
  });
};
export const updateCategory = (dataObj) => {
  const url = catEP;
  return apiprocessor({
    method: "put",
    url,
    dataObj,
    headers: { Authorization: sessionStorage.getItem("accessJWT") },
  });
};
export const deleteCategory = (_id) => {
  const url = catEP;
  return apiprocessor({
    method: "delete",
    url,
    dataObj: { _id },
    headers: { Authorization: sessionStorage.getItem("accessJWT") },
  });
};

//===========products api ===========
export const getProducts = () => {
  const url = productEP;
  return apiprocessor({
    method: "get",
    url,
    headers: { Authorization: sessionStorage.getItem("accessJWT") },
  });
};
export const getSingleProduct = (_id) => {
  const url = productEP + "/" + _id;
  return apiprocessor({
    method: "get",
    url,
    headers: { Authorization: sessionStorage.getItem("accessJWT") },
  });
};

export const postProduct = (dataObj) => {
  const url = productEP;
  return apiprocessor({
    method: "post",
    url,
    dataObj,
    headers: { Authorization: sessionStorage.getItem("accessJWT") },
  });
};
export const deleteProducts = (dataObj) => {
  const url = productEP;
  return apiprocessor({
    method: "delete",
    url,
    dataObj,
    headers: { Authorization: sessionStorage.getItem("accessJWT") },
  });
};
export const updateProduct = (dataObj) => {
  const url = productEP;
  return apiprocessor({
    method: "put",
    url,
    dataObj,
    headers: { Authorization: sessionStorage.getItem("accessJWT") },
  });
};

//============payment methods =========
export const getPaymentMethods = (_id) => {
  const url = _id ? paymentMethodEp + "/" + _id : paymentMethodEp;

  return apiprocessor({
    method: "get",
    url,
    headers: { Authorization: sessionStorage.getItem("accessJWT") },
  });
};
export const postPaymentMethod = (dataObj) => {
  const url = paymentMethodEp;
  return apiprocessor({
    method: "post",
    url,
    dataObj,
    headers: { Authorization: sessionStorage.getItem("accessJWT") },
  });
};
export const updatePaymentMethod = (dataObj) => {
  const url = paymentMethodEp;
  return apiprocessor({
    method: "put",
    url,
    dataObj,
    headers: { Authorization: sessionStorage.getItem("accessJWT") },
  });
};
export const deletePaymentMethod = (_id) => {
  const url = _id ? paymentMethodEp + "/" + _id : paymentMethodEp;
  return apiprocessor({
    method: "delete",
    url,
    headers: { Authorization: sessionStorage.getItem("accessJWT") },
  });
};
//======customer management
export const getCustomers = (_id) => {
  const url = _id ? customersMethodEp + "/" + _id : customersMethodEp;

  return apiprocessor({
    method: "get",
    url,
    headers: { Authorization: sessionStorage.getItem("accessJWT") },
  });
};
