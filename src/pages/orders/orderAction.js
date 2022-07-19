import { setOrders } from "./orderSlice";
import { getOrders } from "../../helpers/axioshelper";

export const ordersAction = (_id) => async (dispatch) => {
  const { status, result } = await getOrders(_id);
  status === "success" && dispatch(setOrders(result));
};
