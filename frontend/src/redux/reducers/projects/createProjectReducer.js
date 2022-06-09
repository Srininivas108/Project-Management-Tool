import {
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
} from "../../actions/actionTypes";


const createProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PROJECT_REQUEST:
      return {
        loading: true,
      };
    case CREATE_PROJECT_SUCCESS:
      return {
        project: action.payload,
      };
    case CREATE_PROJECT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { createProjectReducer };
