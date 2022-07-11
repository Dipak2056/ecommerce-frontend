import { toast } from "react-toastify";
import {
  requestPassworResetOTP,
  updateAdmin,
  updateAdminPasswordFromProfile,
  updatePassword,
} from "../../helpers/axioshelper";
import {
  setPassResetResponse,
  setPassResettingEmail,
  setUser,
} from "./AdminProfileSlice";

export const updateAdminProfileAction = (obj) => async (dispatch) => {
  const promiseResponse = updateAdmin(obj);
  toast.promise(promiseResponse, { pending: "Please Wait" });
  const { status, message, user } = await promiseResponse;

  toast[status](message);
  status === "success" && dispatch(setUser(user));
};

export const requestPassResetOTP = (obj) => async (dispatch) => {
  const response = await requestPassworResetOTP(obj);
  dispatch(setPassResettingEmail(obj.email));
  dispatch(setPassResetResponse(response));
};
export const resetPassAction = (obj) => async (dispatch) => {
  const responsePromise = updatePassword(obj);
  toast.promise(responsePromise, { pending: "please Wait" });
  const { status, message } = await responsePromise;
  toast[status](message);
};

export const updatePassAction = (obj) => async (dispatch) => {
  const responsePromise = updateAdminPasswordFromProfile(obj);
  toast.promise(responsePromise, { pending: "please Wait" });
  const { status, message } = await responsePromise;
  toast[status](message);
};
