import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import AddProject from "./components/Projects/AddProject";
import Projects from "./components/Projects/Projects";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import LoginUser from "./components/users/LoginUser";
import RegisterUser from "./components/users/RegisterUser";
import Userslist from "./components/UsersList/Userslist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginUser} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/addproject" component={AddProject} />
          <Route exact path="/register" component={RegisterUser} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/users" component={Userslist} />
          <Route exact path="/user-update" component={UpdateProfile} />


        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
