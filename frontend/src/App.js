import { Route, useHistory, Switch } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import Home from "./components/Home";
import { LandingPage } from "./components/LandingPage";
import { Header } from "./components/Header";

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
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  return (
    <Security restoreOriginalUri={restoreOriginalUri} oktaAuth={oktaAuth}>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login/callback" component={LoginCallback} />
        <SecureRoute path="/dashboard" component={Home} />
      </Switch>
    </Security>
  );
};

export default App;
