const { oktaJwtVerifier } = require("./oktaJwtVerifier");

const OKTA_AUDIENCE = process.env.OKTA_AUDIENCE;

const oktaAuthRequired = (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    res.status(401);
    return next("Unauthorized");
  }

  const accessToken = match[1];
  const audience = `${OKTA_AUDIENCE}`;
  return oktaJwtVerifier
    .verifyAccessToken(accessToken, audience)
    .then((jwt) => {
      req.jwt = jwt;
      next();
    })
    .catch((err) => {
      res.status(401).send(err.message);
    });
};

export { oktaAuthRequired };
