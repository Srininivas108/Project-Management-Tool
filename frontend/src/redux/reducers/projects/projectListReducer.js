import { FETCH_PROJECT_FAIL, FETCH_PROJECT_REQUEST, FETCH_PROJECT_SUCCESS } from "../../actions/actionTypes";



const projectListReducer = (state = [], action) => {
    switch (action.type) {
      case  FETCH_PROJECT_REQUEST:
        return {
          loading: true,
        };
      case  FETCH_PROJECT_SUCCESS :
        return {
          projects : action.payload,
        };
      case  FETCH_PROJECT_FAIL :
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export { projectListReducer };