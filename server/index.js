"use strict";

require("dotenv").config();
const env = "" + process.env.NODE_ENV;

const express = require("express");
const server = express();

const bodyConfig = {
    limit: "10mb",
    extended: true
}

server.use(express.json(bodyConfig));
server.use(express.urlencoded(bodyConfig))

const middleware = require("./config/middleware");
server.use(middleware.cors);

const config = require("./config/config")[env || "development"];
const mongoose = require("mongoose");

console.log("Trying to connect to the application database...");
mongoose.connect(config.database, config.mongoConfig, err=> {
    if (err) {
        console.log("Could not ocnnect to database.");
        console.log(err);
    }
    else {
        console.log(`Connected to ${process.env.DB_NAME}.`);
    }
});

const routes = require("./src/routes");
server.use("", routes);

const PORT = process.env.PORT || 8081;
server.listen(PORT);
console.log("Application listneing on PORT: " + PORT);
console.log("http://localhost:" + PORT);

module.exports = server;