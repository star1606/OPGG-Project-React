import React from "react";

import "./App.css";

import { Route, Switch } from "react-router-dom";

import Home from "./pages/home/Home";
import Ranking from "./pages/ranking/Ranking";
import Join from "./pages/join/Join";
import Login from "./pages/login/Login";

import Community from "./pages/community/Community";
import Champ from "./pages/champ/Champ";
import CommunityDetail from "./pages/community/CommunityDetail";
import CommunityWrite from "./pages/community/CommunityWrite";
import Summoner from "./pages/summoner/Summoner";
import CommunityEdit from "./pages/community/CommunityEdit";

function App() {
  return (
    <Switch>
      <Route path="/home" component={Home} exact={true} />
      <Route path="/champion" component={Champ} />
      <Route path="/ranking" component={Ranking} />
      <Route path="/community/:id" component={CommunityDetail} />
      <Route path="/community" component={Community} />
      <Route path="/login" component={Login} />
      <Route path="/join" component={Join} />
      <Route path="/write" component={CommunityWrite} />
      <Route patch="/edit" component={CommunityEdit} />
      <Route patch="/summoner/:username" component={Summoner} />
    </Switch>
  );
}

export default App;
