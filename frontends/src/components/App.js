import React, { useState } from "react";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import User from "./Homepage";
import Account from "./AccountComponents/Account";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <div>
      <Switch>
        {!authenticated ? <Route path="/" exact component={Home} /> : ""}

        <Route path="/createaccount" exact component={CreateAccount} />
        <Route
          path="/login"
          exact
          component={() => (
            <Login
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          )}
        />
        {authenticated ? (
          <Route path="/website" exact component={User} />
        ) : (
          <Redirect to="/login" />
        )}

        <Route path="/website/account" component={Account} />
      </Switch>
    </div>
  );
}

export default App;
