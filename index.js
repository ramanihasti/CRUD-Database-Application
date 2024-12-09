const express = require("express");
const connect = require("./db/connect");
const server = express();

const start = async () => {
  try {
    await connect();
    console.log("Successfully connecct to the database");
    server.listen(5000, () => {
      console.log("Server is listing on port 5000.");
    });
  } catch (error) {
    console.log("Faild to db connection", error.message);
  }
};
start();
