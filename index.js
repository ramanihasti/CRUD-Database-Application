const express = require("express");
const connect = require("./db/connect");
const productRouter = require("./routes/productRouter");
const server = express();

server.use(express.json());
server.use("/products", productRouter);

const start = async () => {
  try {
    await connect();
    console.log("Successfully connect to the database.");
    server.listen(5000, () => {
      console.log("Server is listing on port 5000.");
    });
  } catch (error) {
    console.log("Faild to database connection.", error.message);
  }
};
start();
