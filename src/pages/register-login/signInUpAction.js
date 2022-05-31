import { isPending, responseResolved } from "./signInUpSlice";
export const postUserAction = (user) => async (dispatch) => {
  dispatch(isPending());
  //call axios helper to call api
};
