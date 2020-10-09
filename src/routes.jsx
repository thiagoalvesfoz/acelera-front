import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import PageLogin from './views/Pages/PageLogin';
import PageRecoverPassword from './views/Pages/PageRecoverPassword';
import PageRegister from './views/Pages/PageRegister';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={PageLogin}/>
      <Route path="/Recover" component={PageRecoverPassword}/>
      <Route path="/Register" component={PageRegister}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
