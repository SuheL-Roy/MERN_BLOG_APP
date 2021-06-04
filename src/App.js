import React, { useContext } from "react";
import TopBar from "./Topbar/TopBar.jsx";
//import Header from "./Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Single from "./pages/Home/single/Single.jsx";
import Write from "./pages/write/Write.jsx";
import Settings from "./pages/settings/Settings.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Context } from "./context/Context.js";

const App = () => {
  const  {user} = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">
         {user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postid">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
