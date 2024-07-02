const mongoose = require("mongoose");
const app = require("./src/app");
const config = require("./src/config/index");
const path = require("path");
const express = require("express");

const bootstrap = async () => {
  try {
    await mongoose.connect(config.database_url);

    console.log("database is connected");
    app.listen(config.port || 7000, () => console.log("server started"));
  } catch (error) {
    console.log("error found in database " + error);
  }
};


bootstrap();