import axios from "axios";
import constants from "../constants/tasksConstants";

export const getAllTasks = () => async (dispatch) => {
  dispatch({ type: constants.GET_TASKS_REQUEST });
  try {
    const res = await axios.get(``);
    console.log(res);
    dispatch({ type: constants.GET_TASKS_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: constants.GET_TASKS_SUCCESS, payload: error.message });
  }
};
