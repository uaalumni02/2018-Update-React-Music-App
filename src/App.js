import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Search from "./Search/Search";
import Play from "./Play/Play"

import Layout from "./Layout";

function App() {
  return (
    <Layout>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/play" component={Play} />
      </Switch>
    </BrowserRouter>
    </Layout>
  );
}

export default App;
