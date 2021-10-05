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
            <div key={product.id}>
              <h4>{product.masterData.current.name.en}</h4>
              {product.masterData.current.description ? (
                <h5>{product.masterData.current.description.en}</h5>
              ) : null}
              {product.masterData.current.masterVariant.images[0] ? (
                <img
                  src={product.masterData.current.masterVariant.images[0].url}
                  alt={product.masterData.current.name.en}
                  width="100px"
                  height="100px"
                />
              ) : null}
            </div>
          ))}
        </>
      ) : null}
    </>
  );
};
