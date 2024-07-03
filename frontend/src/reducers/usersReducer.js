import constants from "../constants/tasksConstants";

const initialState = {
  isLoading: false,
  user: [],
  error: null,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.REGISTER_USER_REQUEST:
      return { ...state, isLoading: true };
    case constants.REGISTER_USER_SUCCESS:
      return { ...state, user: action.payload, error: null };
    case constants.REGISTER_USER_FAILED:
      return { ...state, user: [], error: action.payload };
    default:
      return state;
  }
};
