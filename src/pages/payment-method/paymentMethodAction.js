import { getPaymentMethods } from "../../helpers/axioshelper";
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
