import React, { useState } from "react";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import User from "./Homepage";

function App() {
  const [access, setAccess] = useState(false);
  console.log(access);
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/createaccount" exact component={CreateAccount} />
        <Route
          path="/login"
          exact
          component={() => <Login access={access} setAccess={setAccess} />}
        />
        {access ? (
          <Route path="/website" exact component={User} />
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    </div>
  );
}

export default App;
