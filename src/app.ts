import express, { Application, Response } from "express";
import cron from "node-cron";
import * as dotenv from "dotenv";
import { shake } from "./utils/insults";

var Twit = require("twit");

dotenv.config();

const { env } = process;

const app: Application = express();

const port = process.env.PORT || "8000";

var T = new Twit({
  consumer_key: env.API_KEY,
  consumer_secret: env.API_SECRET_KEY,
  access_token: env.ACCESS_TOKEN,
  access_token_secret: env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
});

// everyday at 1800hrs
// 0 18 * * *

// every second * * * * * *

// every min * * * * *

cron.schedule("0 18 * * *", function () {
  const insult = shake();

  console.log(insult);

  T.post(
    "statuses/update",
    { status: insult },
    function (err: any, data: any, response: any) {
      console.log(data);
    }
  );
});

app
  .listen(port, () => {
    console.log(`Server running on port ${port}`);
  })
  .on("error", (error: Error) =>
    console.log("Error starting server:>>", error)
  );
