import constants from "../constants/usersConstants";
import axiosInstance from "../service/axiosInstance";
import { authorization } from "../utils/header";

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

export const login = (data) => async (dispatch) => {
    dispatch({ type: constants.LOGIN_USER_REQUEST });
    try {
      const res = await axiosInstance.post(`/user/login`,data); 
      localStorage.setItem("taskmanagement",res?.data?.data?.token);  
      dispatch({ type: constants.LOGIN_USER_SUCCESS, payload: res?.data });
      window.location = "/";
      return res?.data;
    } catch (error) {
      dispatch({ type: constants.LOGIN_USER_FAILED, payload: error.message });
      return error?.response?.data;
    }
  };

  export const checkAuth = () => async (dispatch) => {
    dispatch({ type: constants.CHECK_USER_REQUEST });
    try {
      const res = await axiosInstance.get(`/user/checkauth`,authorization);   
      dispatch({ type: constants.CHECK_USER_SUCCESS, payload: res?.data });
      console.log(res?.data);
      return res?.data;
    } catch (error) {
      dispatch({ type: constants.CHECK_USER_FAILED, payload: error.message });
      console.log(error)
      return error?.response?.data;
    }
  };
