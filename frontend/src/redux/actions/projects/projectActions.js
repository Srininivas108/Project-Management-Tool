import axios from "axios";
import {
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  FETCH_PROJECT_FAIL,
  FETCH_PROJECT_REQUEST,
  FETCH_PROJECT_SUCCESS,
} from "../actionTypes";

// creating the project
const createProjectAction = (title,manager,category,status) => {
  return async (dispatch,getState) => {
    try {
      dispatch({
        type: CREATE_PROJECT_REQUEST,
      
      });
     

     // Get the token of the user from store
     const { userInfo } = getState().userLogin;
     console.log(userInfo.token);

     const config = {
       headers: {
         "Content-Type": "application/json",
         authorization: `Bearer ${userInfo.token}`,
        
       },
      };
       console.log(title)
      const { data } = await axios.post(
        "/api/projects/create",
        {title,manager,category,status},
        config
      );
     
   

      dispatch({
        type: CREATE_PROJECT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_PROJECT_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};

//fetch project list
const fetchProjectsAction = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_PROJECT_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.get("/api/projects/", config);

      dispatch({
        type: FETCH_PROJECT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PROJECT_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};

export { createProjectAction, fetchProjectsAction };
