import { getReviews } from "../../helpers/axioshelper";
import { setReviews } from "./productreview.slice";

export const reviewsAction = () => async (dispatch) => {
  const { data } = await getReviews();
  dispatch(setReviews(data));
};
