import { getReviews } from "../../helpers/axioshelper";
import { setReviews } from "./productreview.slice";

export const reviewsAction = () => async (dispatch) => {
  const { result } = await getReviews();
  dispatch(setReviews(result));
};
