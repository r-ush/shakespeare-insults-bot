var Twit = require("twit");
import * as dotenv from "dotenv";
import { shake } from "./utils/insults";

dotenv.config();

const { env } = process;

var T = new Twit({
  consumer_key: env.API_KEY,
  consumer_secret: env.API_SECRET_KEY,
  access_token: env.ACCESS_TOKEN,
  access_token_secret: env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
});

// T.post(
//   "statuses/update",
//   { status: "Insult goes here! <3" },
//   function (err: any, data: any, response: any) {
//     console.log(data);
//   }
// );

console.log(shake());
