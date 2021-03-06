const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const mqtt = require("./mqtt");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mqtt.connect();

app.post("/mqtt", (req, res) => {
  const { message } = req.body;
  mqtt.sendMessage(message);
  res.status(200).send("Message sent to mqtt broker");
});

const server = http.createServer(app);
const { port } = require("./config");

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
