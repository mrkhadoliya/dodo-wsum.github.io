import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from "../pages/home";
import Crowdpooling from "../pages/launch/crowdpooling";
import Liquidity from "../pages/launch/liquidity";
import Exchange from "../pages/launch/exchange";
import LiquidityMining from "../pages/launch/liquidity-mining";
import CreateCp from "../pages/launch/create-cp";
import CreateToken from "../pages/launch/create-token";
import Vdodo from "../pages/launch/vdodo";
import Pool from "../pages/launch/pool";
import Dashboard from "../pages/launch/dashboard";
import PoolCreate from "pages/launch/poolcreate";
import CreateTokkenForm from "pages/launch/create-token-form";
import LaunchCrowdpooling from "pages/launch/Launch-a-Crowdpooling";
function Router() {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/crowdpooling" component={Crowdpooling} />
      <Route exact path="/liquidity" component={Liquidity} />
      <Route exact path="/exchange" component={Exchange} />
      <Route exact path="/liquidity-mining" component={LiquidityMining} />
      <Route exact path="/create-cp" component={CreateCp} />
      <Route exact path="/create-token" component={CreateToken} />
      <Route exact path="/vdodo" component={Vdodo} />
      <Route exact path="/pool" component={Pool} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/poolcreate" component={PoolCreate} />
      <Route exact path="/createtokenform" component={CreateTokkenForm} />
      <Route exact path="/launchcrowdpooling" component={LaunchCrowdpooling} />
    </HashRouter>
  );
}

export default Router;
