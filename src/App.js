import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

const App = () => {
  const api = `${process.env.REACT_APP_COMMERCETOOLS_API}`;
  const oauthToken = `${process.env.REACT_APP_AUTH_TOKEN}`;

  useEffect(() => {
    let config = {
      headers: {
        Authorization: "Bearer " + oauthToken,
      },
    };

    axios.get(api, config).then((response) => {
      console.log(response.data.results);
    });
  }, [oauthToken, api]);

  return (
    <Router>
      <Switch>
        <h1>React app </h1>
      </Switch>
    </Router>
  );
};

export default App;
