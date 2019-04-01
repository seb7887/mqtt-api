const mosca = require("mosca");
const chalk = require("chalk");

const settings = {
  port: 1883
};

const server = new mosca.Server(settings);

server.on("ready", () => {
  console.log(chalk.bgGreen.black("Mosca MQTT broker ready"));
});

server.on("clientConnected", client => {
  console.log(chalk.bgGreen.black(`Client connected ${client.id}`));
});

server.on("published", (packet, client) => {
  console.log(chalk.bgGreen.black(`Topic ${packet.topic}`));
  console.log(
    chalk.bgGreen.black(`Published: ${packet.payload.toString("utf8")}`)
  );
});
