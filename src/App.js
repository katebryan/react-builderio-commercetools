import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Security, LoginCallback, SecureRoute } from "@okta/okta-react";
import { OktaAuth } from "@okta/okta-auth-js";
import Home from "./components/Home";
import Entry from "./components/Entry";

const CALLBACK_PATH = "/login/callback";
const oktaClientId = process.env.REACT_APP_OKTA_CLIENT;
const oktaIssuer = process.env.REACT_APP_OKTA_ISSUER;
const oktaRedirectUri = process.env.REACT_APP_OKTA_REDIRECT_URI;

const config = {
  clientId: oktaClientId,
  issuer: oktaIssuer,
  redirectUri: oktaRedirectUri,
  scopes: ["openid", "profile", "email"],
  pkce: true,
};

const oktaAuth = new OktaAuth(config);

const App = () => {
  return (
    <Router>
      <Security oktaAuth={oktaAuth} restoreOriginalUri="/login">
        <Switch>
          <Route path="/login" component={Entry} />
          <Route path={CALLBACK_PATH} component={LoginCallback} />
          <SecureRoute path="/" component={Home} />
        </Switch>
      </Security>
    </Router>
  );
};

export default App;
