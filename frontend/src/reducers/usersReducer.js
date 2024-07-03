import constants from "../constants/usersConstants";

const initialState = {
  isLoading: false,
  user: [],
  error: null,
  isAuthenticated : false
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    // register
    case constants.REGISTER_USER_REQUEST:
      return { ...state, isLoading: true };
    case constants.REGISTER_USER_SUCCESS:
      return { ...state, user: [], error: null };
    case constants.REGISTER_USER_FAILED:
      return { ...state, user: [], error: action.payload };

    // login
    case constants.LOGIN_USER_REQUEST:
      return { ...state, isLoading: true };
    case constants.LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, error: null, isAuthenticated : true };
    case constants.LOGIN_USER_FAILED:
      return { ...state, user: [], error: action.payload, isAuthenticated : true };

    // check user
    case constants.CHECK_USER_REQUEST:
      return { ...state, isLoading: true };
    case constants.CHECK_USER_SUCCESS:
      return { ...state, user: action.payload, error: null, isAuthenticated : true };
    case constants.CHECK_USER_FAILED:
      return { ...state, user: [], error: action.payload, isAuthenticated : false };


    default:
      return state;
  }
};
