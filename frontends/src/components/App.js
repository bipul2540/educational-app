import React from "react";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/createaccount" exact component={CreateAccount} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </div>
  );
}

export default App;
