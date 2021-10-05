import { useEffect, useState } from "react";
import axios from "axios";

export const LandingPage = () => {
  const [products, setProducts] = useState(null);

  const api = `${process.env.REACT_APP_COMMERCETOOLS_API}`;
  const oauthToken = `${process.env.REACT_APP_AUTH_TOKEN}`;

  useEffect(() => {
    let config = {
      headers: {
        Authorization: "Bearer " + oauthToken,
      },
    };

    axios.get(api, config).then((response) => {
      setProducts(response.data.results);
    });
  }, [oauthToken, api]);

  return (
    <>
      <h1>LANDING PAGE</h1>
      {products ? (
        <>
          <div>Welcome to my store</div>
          {products.map((product) => (
            <h4 key={product.id}>{product.masterData.current.name.en}</h4>
          ))}
        </>
      ) : null}
    </>
  );
};
