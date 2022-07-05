import { setProducts, setSelectedProduct } from "./productSlice";
import {
  deleteProducts,
  getProducts,
  getSingleProduct,
  postProduct,
  updateProduct,
} from "../../helpers/axioshelper";
import { toast } from "react-toastify";

export const fetchProductsAction = () => async (dispatch) => {
  const { status, products } = await getProducts();
  status === "success" && dispatch(setProducts(products));
};
export const fetchSingleProductAction = (_id) => async (dispatch) => {
  const { status, products } = await getSingleProduct(_id);
  status === "success" &&
    products._id &&
    dispatch(setSelectedProduct(products));
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
export const updateProductAction = (obj) => async (dispatch) => {
  const response = updateProduct(obj);
  toast.promise(response, {
    pending: "please Wait ...",
  });
  const { status, message, result } = await response;
  toast[status](message);
  status === "success" && dispatch(setSelectedProduct(result));
};
