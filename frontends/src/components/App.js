import React from "react";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/createaccount" exact component={CreateAccount} />

        <Route path="/login" exact component={Login} />
      </Switch>
    </div>
  );
}

export default App;
