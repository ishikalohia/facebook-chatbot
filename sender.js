const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

const local_token = "12345678";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(req.query);
  const challenge = req.query["hub.challenge"];
  const token = req.query["hub.verify_token"];

  if (local_token == token) {
    res.send(challenge);
  } else {
    res.send("failed");
  }
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Ok");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
