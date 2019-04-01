const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://test.mosquitto.org");

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
