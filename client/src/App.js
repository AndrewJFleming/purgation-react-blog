import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";

import TopNav from "./components/TopNav/TopNav";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Write from "./pages/Write/Write";
import Single from "./pages/Single/Single";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Register";
import { Context } from "./shared/context/Context";
import WriteSample from "./pages/WriteSample/WriteSample";

function App() {
  const { user } = useContext(Context);

  return (
    <BrowserRouter>
      <TopNav user={user} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        {/* <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route> */}
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
        <Route path="/write">
          <WriteSample/>
        </Route>
        {/* <Route path="/write">
          {user ? <Write /> : <Redirect to="/login" />}
        </Route> */}
        <Route path="/settings">
          {user ? <Settings /> : <Redirect to="/login" />}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
