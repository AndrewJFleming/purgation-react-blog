import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Write from "./pages/Write/Write";
import Single from "./pages/Single/Single";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/" exact component={Home} />
        <Route path="/write">
          <Write />
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
