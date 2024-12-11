const mongooes = require("mongoose");

const connect = () => {
  mongooes.connect("mongodb://localhost:27017/myproduct");
};

module.exports = connect;

// compass ke database ke sath mongooes ka connection hota hain.
