import React from "react";



//components
import Nav from './components/Nav/Nav';

//admin
import Login from "./view/pages/Admin/components/Login/Login"
import ForgetPassword from "./view/pages/Admin/components/ForgetPassword/ForgetPassword";
import MainPage from "./view/pages/Analytics/components/mainPage/MainPage";
import ChangePassword from "./view/pages/Admin/components/ChangePassword/ChangePassword";
import KeyPassword from "./view/pages/Admin/components/KeyPassword/KeyPassword";
import UserList from "./view/pages/Admin/components/usersList/UserList";
import ModificationByField from "./view/pages/Analytics/components/ModificationByField/ModificationByField";
import DeletedJiraTickets from "./view/pages/Analytics/components/DeletedJiraTickets/DeletedJiraTickets";
import ChangesInJiraTickets from "./view/pages/Analytics/components/ChangesInJiraTickets/ChangesInJiraTickets";
import ChangesByParentId from "./view/pages/Analytics/components/ChangesByParentId/ChangesByParentId";
import DelaysInDelivery from "./view/pages/Analytics/components/DelaysInDelivery/DelaysInDelivery";

import "./App.css"


import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";





function App() {
  // let location = useLocation();
  // console.log(location);

  return (
    <Router>
      <div className='app'>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@200;300;400;500;531;600;700;800&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        <Nav />
        <div className='mainPage'>
          <Switch>
            <Route exact={true} path="/">
              <Login />
            </Route>
            <Route path="/changePassword">
              <ChangePassword />
            </Route>
            <Route path="/forgotPassword">
              <ForgetPassword />
            </Route>
            <Route path="/keyPassword">
              <KeyPassword />
            </Route>
            <Route path="/Admin">
              <UserList />
            </Route>
            <Route path="/analysis">
              <MainPage />
            </Route>

            <Route path="/ModificationByField">
              <ModificationByField />
            </Route>
            <Route path="/DeletedJiraTickets">
              <DeletedJiraTickets />
            </Route>
            <Route path="/ChangesInJiraTickets">
              <ChangesInJiraTickets />
            </Route>
            <Route path="/ChangesInParentID">
              <ChangesByParentId />
            </Route>
            <Route path="/DelaysInDelivery">
              <DelaysInDelivery />
            </Route>

          </Switch>
        </div>
      </div>
    </Router >
  );
}


export default App;
