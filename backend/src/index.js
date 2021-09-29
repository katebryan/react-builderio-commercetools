dotenv = require("dotenv");
express = require("express");
cors = require("cors");
const { oktaAuthRequired } = require("./lib/oktaAuthRequired");

dotenv.config({
  path: ".env",
});

const app = express();
const PORT = process.env.APP_PORT;

app.use(cors());

app.get("/api/locked", oktaAuthRequired, (_, res) => {
  res.json({
    messages: [
      {
        date: new Date(),
        text: "No unauthorised access, locked route",
      },
    ],
  });
});

app.get("/api/unlocked", (_, res) => {
  res.json({
    messages: [
      {
        date: new Date(),
        text: "No authorisation required!",
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`We are LIVE on http://localhost:${process.env.APP_PORT}`);
});
