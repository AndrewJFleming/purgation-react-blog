import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import TopBar from "./components/TopBar/TopBar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
    // <React.Fragment>
    //   <TopBar />
    //   <Home />
    //  </React.Fragment>
  );
}

export default App;
