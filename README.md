# How to run the project

cd into each of the folders and run the `yarn` command

_backend_

- register for an okta dev account, login and select `Applications` from the dropdown.
- click on `Create app integration` -> `API Services`.
- create a `.env` file in the root of the backend folder, copy the variable names from the `envexample.js` file and add in your client secrets (the `okta-domain` value comes from the url).
- to start the server run the `yarn run start` command.

_frontend_

- select `Applications` from the dropdown.
- click on `Create app integration` -> `OIDC - OpenID Connect` -> `Single-Page Application`.
- set up your application with the details of the ports you are running your project off (found in `Security` -> `API` -> `Trusted Origins` -> `Add Origin`).
- in the `SPA Login` section add the `Sign-in redirect URI: http://localhost:PORT/login/callback`
