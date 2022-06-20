import { setProducts } from "./productSlice";
import { getProducts } from "../../helpers/axioshelper";

export const fetchProductsAction = () => async (dispatch) => {
  const { status, products } = await getProducts();
  status === "success" && dispatch(setProducts(products));
};
