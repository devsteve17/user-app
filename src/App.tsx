import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginForm } from "./loginForm/loginForm";
import { UsersTable } from "./usersTable/usersTable";
import "bulma/css/bulma.min.css";

export const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/users" component={UsersTable} />
        </Switch>
      </Router>
    </>
  );
};
