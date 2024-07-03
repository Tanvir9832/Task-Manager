import { createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from 'redux-thunk';

import { usersReducer } from "./reducers/usersReducer";
import { tasksReducer,singleTaskReducer } from "./reducers/tasksReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  tasks : tasksReducer,
  task : singleTaskReducer
});

const middlewareEnhancer = applyMiddleware(thunk);

const store = createStore(rootReducer, middlewareEnhancer);

export default store;
