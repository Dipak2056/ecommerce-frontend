import { setOrders } from "./orderSlice";
import { getOrders } from "../../helpers/axioshelper";

export const ordersAction = (_id) => async (dispatch) => {
  const { status, orders } = await getOrders(_id);
  status === "success" && orders.length && dispatch(setOrders(orders));
};
