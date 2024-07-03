import constants from "../constants/usersConstants";
import axiosInstance from "../service/axiosInstance";

export const register = (data) => async (dispatch) => {
  dispatch({ type: constants.REGISTER_USER_REQUEST });
  try {
    const res = await axiosInstance.post(`/user/registration`,data);   
    dispatch({ type: constants.REGISTER_USER_SUCCESS, payload: res?.data });
    return res?.data;
  } catch (error) {
    dispatch({ type: constants.REGISTER_USER_FAILED, payload: error.message });
    return error?.response?.data;
  }
};
