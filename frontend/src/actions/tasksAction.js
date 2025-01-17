import constants from "../constants/tasksConstants";
import axiosInstance from "../service/axiosInstance";
import { authorization } from "../utils/header";

export const getAllTasks = (page, search) => async (dispatch) => {
  dispatch({ type: constants.GET_TASKS_REQUEST });
  try {
    const res = await axiosInstance.get(
      `/task/get-all-tasks/?title=${search.trim()}&page=${page}`,
      authorization
    );
    dispatch({ type: constants.GET_TASKS_SUCCESS, payload: res.data.data });
    return res.data;
  } catch (error) {
    dispatch({ type: constants.GET_TASKS_SUCCESS, payload: error.message });
  }
};

export const addTask = (data) => async (dispatch) => {
  dispatch({ type: constants.ADD_TASKS_REQUEST });
  try {
    const res = await axiosInstance.post(
      `/task/create-task`,
      data,
      authorization
    );
    dispatch({ type: constants.ADD_TASKS_SUCCESS, payload: res?.data });
    return res?.data;
  } catch (error) {
    dispatch({ type: constants.ADD_TASKS_FAILED, payload: error?.message });
  }
};

export const getSingleTask = (id) => async (dispatch) => {
  dispatch({ type: constants.GET_SINGLE_TASK_REQUEST });
  try {
    const res = await axiosInstance.get(`/task/get-task/${id}`, authorization);
    dispatch({ type: constants.GET_SINGLE_TASK_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: constants.GET_SINGLE_TASK_FAILED,
      payload: error.message,
    });
  }
};

export const deleteTask = (id) => async (dispatch) => {
  dispatch({ type: constants.DELETE_TASKS_REQUEST });
  try {
    const res = await axiosInstance.delete(
      `/task/delete-task/${id}`,
      authorization
    );
    dispatch({ type: constants.DELETE_TASKS_SUCCESS, payload: res.data });
    return true;
  } catch (error) {
    dispatch({ type: constants.DELETE_TASKS_FAILED, payload: error.message });
    return false;
  }
};

export const updateTask = (data, id) => async (dispatch) => {
  dispatch({ type: constants.UPDATE_TASKS_REQUEST });
  try {
    const res = await axiosInstance.put(
      `/task/update-task/${id}`,
      data,
      authorization
    );
    dispatch({ type: constants.UPDATE_TASKS_SUCCESS, payload: res.data });
    return true;
  } catch (error) {
    dispatch({ type: constants.UPDATE_TASKS_FAILED, payload: error.message });
    return false;
  }
};

export const updateTaskStatus = (id) => async (dispatch) => {
  dispatch({ type: constants.UPDATE_TASKS_STATUS_REQUEST });
  try {
    const res = await axiosInstance.put(
      `/task/update-status/${id}`,
      {},
      authorization
    );
    dispatch({
      type: constants.UPDATE_TASKS_STATUS_SUCCESS,
      payload: res.data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: constants.UPDATE_TASKS_STATUS_FAILED,
      payload: error.message,
    });
    return false;
  }
};
