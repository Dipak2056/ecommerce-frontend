import { toast } from "react-toastify";
import {
  getPaymentMethods,
  postPaymentMethod,
} from "../../helpers/axioshelper";
import {
  setPaymentMethods,
  setSelectedSelectedPaymentMethods,
} from "./paymentMethodSlice";

export const fetchPaymentMethods = () => async (dispatch) => {
  //call axios to call api
  const response = await getPaymentMethods();
  //get data and set to state
  response.status === "success" && dispatch(setPaymentMethods(response.result));
};
export const postPaymentMethodAction = (obj) => async (dispatch) => {
  //call axios to call api
  const responsePromise = postPaymentMethod(obj);
  toast.promise(responsePromise, {
    pending: "Please Wait..",
  });
  const response = await responsePromise;
  //get data and set to state
  response.status === "success" && dispatch(fetchPaymentMethods());
};
