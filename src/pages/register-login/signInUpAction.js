import {
  postUser,
  loginUser,
  getAdminUser,
  requestNewJWT,
} from "../../helpers/axioshelper";
import { isPending, responseResolved } from "./signInUpSlice";
import { toast } from "react-toastify";
import { setUser } from "../admin-profile/AdminProfileSlice";

export const postUserAction = (user) => async (dispatch) => {
  dispatch(isPending());
  //call axios helper to call api
  const promiseData = postUser(user);
  toast.promise(promiseData, {
    pending: "Please Wait...",
  });
  const data = await promiseData;
  toast[data.status](data.message);
  dispatch(responseResolved(data));
};

export const postLoginAction = (user) => async (dispatch) => {
  dispatch(isPending());
  const promiseData = loginUser(user);
  toast.promise(promiseData, {
    pending: "Please Wait...",
  });
  const data = await promiseData;

  if (data.status === "success") {
    sessionStorage.setItem("accessJWT", data.accessJWT);
    localStorage.setItem("refreshJWT", data.refreshJWT);
    dispatch(setUser(data.user));
  }

  data.status === "error" && toast[data.status](data.message);
  dispatch(responseResolved(data));
};

const fetchUser = (accessJWT) => async (dispatch) => {
  const response = await getAdminUser();
  response.status === "success" && dispatch(setUser(response.user));
};

export const autoAdminLogin = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");
  //if access jwt exists, fetch user and mount user in our state...
  if (accessJWT) {
    dispatch(fetchUser());
    return;
  } else if (refreshJWT) {
    //if refresh jwt exists, fetch new access jwt and fetch the user...
    const token = await requestNewJWT();
    token ? dispatch(fetchUser()) : dispatch(adminLogout());
  } else {
    dispatch(adminLogout());
  }
  //else
};

export const adminLogout = () => (dispatch) => {
  sessionStorage.removeItem("accessJWT");
  localStorage.removeItem("refreshJWT");
  dispatch(setUser({}));
};
