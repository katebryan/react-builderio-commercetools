import { useOktaAuth } from "@okta/okta-react";
import { useState, useEffect } from "react";

const Home = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      oktaAuth.getUserInfo().then(info => {
        setUserInfo(info);
      });
    }
  }, [authState, oktaAuth]); // Update if authState changes

  return (
    <div>
      {userInfo && (
        <div>
          <p>Welcome back, {userInfo.name}!</p>
        </div>
      )}
    </div>
  );
};

export default Home;