const mqtt = require("mqtt");
const { broker } = require("../config");

const client = mqtt.connect(broker);

exports.connect = () => {
  client.on("connect", () => {
    client.subscribe("mytopic", { qos: 0 });
    console.log("mqtt client connected");
  });

  client.on("error", err => {
    console.log(err);
    client.end();
  });

  client.on("message", (topic, message) => {
    console.log(message.toString());
  });

  client.on("close", () => {
    console.log("mqtt client disconnected");
  });
};

exports.sendMessage = message => {
  client.publish("mytopic", message);
};
