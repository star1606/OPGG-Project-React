import React from "react";

import "./App.css";

import { Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Ranking from "./pages/ranking/Ranking";
import Join from "./pages/join/Join";
import Login from "./pages/login/Login";

import Community from "./pages/community/Community";
import Champ from "./pages/champ/Champ";
import CommunityDetail from "./pages/community/CommunityDetail";

function App() {
  return (
    <div>
      <Route path="/" component={Home} exact={true} />
      <Route path="/champion" component={Champ} />
      <Route path="/ranking" component={Ranking} />
      <Route path="/community" component={Community} />
      <Route path="/login" component={Login} />
      <Route path="/join" component={Join} />
      <Route path="/posts/:id" component={CommunityDetail} />
    </div>
  );
}

export default App;
