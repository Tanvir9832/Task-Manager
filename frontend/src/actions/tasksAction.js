import constants from "../constants/tasksConstants";
import axiosInstance from "../service/axiosInstance";
import { authorization } from "../utils/header";

export const getAllTasks = () => async (dispatch) => {
  dispatch({ type: constants.GET_TASKS_REQUEST });
  try {
    const res = await axiosInstance.get(``, authorization);
    console.log(res);
    dispatch({ type: constants.GET_TASKS_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: constants.GET_TASKS_SUCCESS, payload: error.message });
  }
};

export const addTask = (data) => async (dispatch) => {
  dispatch({ type: constants.ADD_TASKS_REQUEST });
  try {
    const res = await axiosInstance.post(`/task/create-task`, data, authorization);
    dispatch({ type: constants.ADD_TASKS_SUCCESS, payload: res?.data });
    return res?.data
  } catch (error) {
    console.log(error);
    dispatch({ type: constants.ADD_TASKS_FAILED, payload: error?.message });
  }
};

export const getSingleTask = () => async (dispatch) => {
  dispatch({ type: constants.GET_SINGLE_TASK_REQUEST });
  try {
    const res = await axiosInstance.get(``, authorization);
    console.log(res);
    dispatch({ type: constants.GET_SINGLE_TASK_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: constants.GET_SINGLE_TASK_FAILED,
      payload: error.message,
    });
  }
};

export const deleteTask = () => async (dispatch) => {
  dispatch({ type: constants.DELETE_TASKS_REQUEST });
  try {
    const res = await axiosInstance.get(``, authorization);
    console.log(res);
    dispatch({ type: constants.DELETE_TASKS_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: constants.DELETE_TASKS_FAILED, payload: error.message });
  }
};

export const updateTask = (data) => async (dispatch) => {
  dispatch({ type: constants.UPDATE_TASKS_REQUEST });
  try {
    const res = await axiosInstance.post(``, data, authorization);
    console.log(res);
    dispatch({ type: constants.UPDATE_TASKS_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: constants.UPDATE_TASKS_FAILED, payload: error.message });
  }
};

export const updateTaskStatus = () => async (dispatch) => {
  dispatch({ type: constants.UPDATE_TASKS_STATUS_REQUEST });
  try {
    const res = await axiosInstance.put(``, {}, authorization);
    console.log(res);
    dispatch({
      type: constants.UPDATE_TASKS_STATUS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: constants.UPDATE_TASKS_STATUS_FAILED,
      payload: error.message,
    });
  }
};
