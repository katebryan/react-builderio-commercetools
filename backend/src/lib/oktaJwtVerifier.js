import OktaJwtVerifier from "@okta/jwt-verifier";

const OKTA_DOMAIN = process.env.OKTA_DOMAIN;
const OKTA_AUTH_SERVER_ID = process.env.OKTA_AUTH_SERVER_ID;

export const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: `https://${OKTA_DOMAIN}/oauth2/${OKTA_AUTH_SERVER_ID}`,
});
