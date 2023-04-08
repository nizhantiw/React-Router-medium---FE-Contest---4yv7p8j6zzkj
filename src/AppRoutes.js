import React from "react";
import { Switch, Route } from "react-router-dom";
import Index from "../Pages/Index";
import BackgroundColorChanger from "../Pages/BackgroundColorChanger";
import Calculator from "../Pages/Calculator";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/bgcolor/:colorname" component={BackgroundColorChanger} />
      <Route path="/calculator" component={Calculator} />
      <Route exact path="/" component={Index} />
    </Switch>
  );
}

export default AppRoutes;
