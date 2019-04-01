const mosca = require("mosca");

const settings = {
  port: 1883
};

const server = new mosca.Server(settings);

server.on("ready", () => {
  console.log("Mosca MQTT broker ready");
});

server.on("clientConnected", () => {
  console.log("Client connected", client.id);
});

server.on("published", (packet, client) => {
  console.log("Topic", packet.topic);
  console.log("Published: ", packet.payload.toString("utf8"));
});
