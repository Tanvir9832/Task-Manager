import constants from "../constants/tasksConstants";

const initialState = {
  isLoading: false,
  tasks: [],
  error: null,
};
export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_TASKS_REQUEST:
      return { ...state, isLoading: true };
    case constants.GET_TASKS_SUCCESS:
      return { ...state, tasks: action.payload, error: null };
    case constants.GET_TASKS_FAILED:
      return { ...state, tasks: [], error: action.payload };
    default:
      return state;
  }
};

const singleTaskInitialState = {
  isLoading: false,
  task: [],
  error: null,
};
export const singleTaskReducer = (state = singleTaskInitialState, action) => {
  switch (action.type) {
    case constants.GET_SINGLE_TASK_REQUEST:
      return { ...state, isLoading: true };
    case constants.GET_SINGLE_TASK_SUCCESS:
      return { ...state, task: action.payload, error: null };
    case constants.GET_SINGLE_TASK_FAILED:
      return { ...state, tasks: [], error: action.payload };

    case constants.DELETE_TASKS_REQUEST:
      return { ...state, isLoading: true };
    case constants.DELETE_TASKS_SUCCESS:
      return { ...state, task: action.payload, error: null };
    case constants.DELETE_TASKS_FAILED:
      return { ...state, tasks: [], error: action.payload };

    case constants.UPDATE_TASKS_REQUEST:
      return { ...state, isLoading: true };
    case constants.UPDATE_TASKS_SUCCESS:
      return { ...state, task: action.payload, error: null };
    case constants.UPDATE_TASKS_FAILED:
      return { ...state, tasks: [], error: action.payload };

    case constants.UPDATE_TASKS_STATUS_REQUEST:
      return { ...state, isLoading: true };
    case constants.UPDATE_TASKS_STATUS_SUCCESS:
      return { ...state, task: action.payload, error: null };
    case constants.UPDATE_TASKS_STATUS_FAILED:
      return { ...state, tasks: [], error: action.payload };

    case constants.ADD_TASKS_REQUEST:
      return { ...state, isLoading: true };
    case constants.ADD_TASKS_SUCCESS:
      return { ...state, task: action.payload, error: null };
    case constants.ADD_TASKS_FAILED:
      return { ...state, tasks: [], error: action.payload };
    default:
      return state;
  }
};
