import { useOktaAuth } from "@okta/okta-react";
import { useHistory } from "react-router-dom";

export const Header = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const history = useHistory();

  const login = async () => oktaAuth.signInWithRedirect();
  const logout = async () => {
    const basename =
      window.location.origin + history.createHref({ pathname: "/" });
    try {
      await oktaAuth.signOut({ postLogoutRedirectUri: basename });
    } catch (err) {
      if (err) throw err;
    }
  };

  const buttonText = authState?.isAuthenticated ? "Logout" : "Login";
  const btnLogic = authState?.isAuthenticated ? logout : login;

  return (
    <>
      <div>
        Okta React
        <button onClick={btnLogic}>{buttonText}</button>
      </div>
    </>
  );
};
