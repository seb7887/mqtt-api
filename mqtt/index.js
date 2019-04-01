const mqtt = require("mqtt");
const chalk = require("chalk");
const { broker } = require("../config");

const client = mqtt.connect(broker);

exports.connect = () => {
  client.on("connect", () => {
    client.subscribe("mytopic", { qos: 0 });
    console.log(chalk.green("mqtt client connected"));
  });

  client.on("error", err => {
    console.log(chalk.red(err));
    client.end();
  });

  client.on("message", (topic, message) => {
    console.log(chalk.green(message.toString()));
  });

  client.on("close", () => {
    console.log(chalk.green("mqtt client disconnected"));
  });
};

exports.sendMessage = message => {
  client.publish("mytopic", message);
};
