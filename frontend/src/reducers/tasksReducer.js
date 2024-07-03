import constants from '../constants/tasksConstants';


const initialState = {
    isLoading : false,
    tasks : [],
    error : null
}
export const tasksReducer = (state= initialState,action)=>{
    switch(action.type){
        case constants.GET_TASKS_REQUEST: 
        return {...state, isLoading: true};
        case constants.GET_TASKS_SUCCESS:
        return {...state, tasks : action.payload, error : null};
        case constants.GET_TASKS_FAILED:
        return {...state,tasks: [], error: action.payload};
        default :
        return state;
    }
}