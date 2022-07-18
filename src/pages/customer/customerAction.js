import { setCustomers } from "./customerSlice";
import { getCustomers } from "../../helpers/axioshelper";

export const getCustomersAction = (_id) => async (dispatch) => {
  const { status, customers } = await getCustomers(_id);
  status === "success" && customers.length && dispatch(setCustomers(customers));
};
