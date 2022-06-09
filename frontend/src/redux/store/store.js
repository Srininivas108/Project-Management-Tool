import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createProjectReducer } from "../reducers/projects/createProjectReducer";
import { projectListReducer } from "../reducers/projects/projectListReducer";
import { userReducer } from "../reducers/users/userAuthReducer";
import { userProfileReducer } from "../reducers/users/userProfileReducer";
import { updateUserProfile } from "../reducers/users/updateUserProfileReducer";
import usersListReducer from "../reducers/users/usersListReducer";


const middlewares = [thunk];

const reducer = combineReducers({
  projectCreate: createProjectReducer,
  projectsList: projectListReducer,
  userLogin: userReducer,
  userProfile: userProfileReducer,
  updateUser: updateUserProfile,
  userslist:usersListReducer,
});

//get user from localstroge and save it into our storage
const userAuthFromStorage= localStorage.getItem('userAuthData') ? JSON.parse(localStorage.getItem('userAuthData')): null;

const  initialState = {
  userLogin : {userInfo : userAuthFromStorage},
};
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export { store };
