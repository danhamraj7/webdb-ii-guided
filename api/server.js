const express = require("express");
const helmet = require("helmet");

const fruitsRouter = require("../fruits/fruits-router.js");
const veggiesRouter = require("../veggies/veggiesRouter");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/fruits", fruitsRouter);
server.use("/api/veggies", veggiesRouter);

server.get("/", (req, res) => {
  res.send("server is up and running!");
});

module.exports = server;
