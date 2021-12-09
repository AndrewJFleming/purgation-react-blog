import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Write from "./pages/Write/Write";
import Single from "./pages/Single/Single";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Context } from "./shared/context/Context";

function App() {
  const { user } = useContext(Context);

  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
        <Route path="/write">
          {user ? <Write /> : <Redirect to="/register" />}
        </Route>
        <Route path="/settings">
          {user ? <Settings /> : <Redirect to="/register" />}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
