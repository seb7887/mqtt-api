const dev = process.env.NODE_ENV !== "production";

const config = {
  broker: dev ? "mqtt://test.mosquitto.org" : "mqtt://localhost",
  port: process.env.PORT || 7777
};

module.exports = config;
