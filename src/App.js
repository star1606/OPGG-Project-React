import React from "react";

import "./App.css";
import Header2 from "./include/Header2";
import Login from "./login/Login";
import "./login/Login.css";
import { Route } from "react-router-dom";
import Champ from "./champ/Champ";
import Home from "./home/Home";
import Ranking from "./ranking/Ranking";
import Community from "./community/Community";

function App() {
  return (
    <div>
      <Route path="/" component={Home} exact={true} />
      <Route path="/champion" component={Champ} />
      <Route path="/ranking" component={Ranking} />
      <Route path="/community" component={Community} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
