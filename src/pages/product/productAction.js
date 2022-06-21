import { setProducts } from "./productSlice";
import {
  deleteProducts,
  getProducts,
  postProduct,
} from "../../helpers/axioshelper";
import { toast } from "react-toastify";

export const fetchProductsAction = () => async (dispatch) => {
  const { status, products } = await getProducts();
  status === "success" && dispatch(setProducts(products));
};
export const postProductAction = (obj) => async (dispatch) => {
  const response = postProduct(obj);
  toast.promise(response, {
    pending: "please Wait ...",
  });
  const { status, message } = await response;
  toast[status](message);
  status === "success" && dispatch(fetchProductsAction());
};
export const deleteProductsAction = (ids) => async (dispatch) => {
  const response = deleteProducts(ids);
  toast.promise(response, {
    pending: "please Wait ...",
  });
  const { status, message } = await response;
  toast[status](message);
  status === "success" && dispatch(fetchProductsAction());
};
