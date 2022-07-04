import { toast } from "react-toastify";
import { requestPassworResetOTP, updateAdmin } from "../../helpers/axioshelper";
import { setPassResetResponse, setUser } from "./AdminProfileSlice";

export const updateAdminProfileAction = (obj) => async (dispatch) => {
  const promiseResponse = updateAdmin(obj);
  toast.promise(promiseResponse, { pending: "Please Wait" });
  const { status, message, user } = await promiseResponse;

  toast[status](message);
  status === "success" && dispatch(setUser(user));
};

export const requestPassResetOTP = (obj) => async (dispatch) => {
  const response = await requestPassworResetOTP(obj);
  dispatch(setPassResetResponse(response));
};
