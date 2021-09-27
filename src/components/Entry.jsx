import { useOktaAuth } from "@okta/okta-react";

const Entry = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const login = () => oktaAuth.signInWithRedirect({ originalUri: "/" });

  if (!authState) {
    return (
      <>
        <div>Loading authentication...</div>
        <h2>AND OTHER THINGS</h2>
      </>
    );
  } else if (!authState.isAuthenticated) {
    return (
      <div>
        <button onClick={login}>Login</button>
      </div>
    );
  }
};

export default Entry;
