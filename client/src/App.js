import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Write from "./pages/Write/Write";
import Single from "./pages/Single/Single";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/write">
          <Write />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
