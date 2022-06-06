import { postUser } from "../../helpers/axioshelper";
import { isPending, responseResolved } from "./signInUpSlice";
import { toast } from "react-toastify";

export const postUserAction = (user) => async (dispatch) => {
  dispatch(isPending());
  console.log(user);
  //call axios helper to call api
  const promiseData = postUser(user);
  toast.promise(promiseData, {
    pending: "Please Wait...",
  });
  const data = await promiseData;
  toast[data.status](data.message);
  dispatch(responseResolved(data));
};
