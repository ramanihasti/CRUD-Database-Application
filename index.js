const mongooes = require("mongoose");
const express = require("express");
const server = express();

//schema
const userSchema = new mongooes.Schema({
  fname: { type: String, minlLength: 2, maxLength: 20, require: true },
  lname: { type: String, minlLength: 2, maxLength: 20, require: true },
  email: {
    type: String,
    validate: {
      validator: (value) => {
        const emailRegex =
          /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/;
        const isCorrect = emailRegex.test(value);

        return isCorrect;
      },
      message: "Invalid email",
    },
    require: true,
    unique: true,
  },
  isActive: { default: true, type: Boolean },
  height: { type: Number, requried: true, min: 4, max: 7 },
});

//model
const User = mongooes.model("user", userSchema);

const start = async () => {
  try {
    await mongooes.connect("mongodb://localhost:27017/mydb");
    console.log("successfully connect to database!");
    server.listen(5000, () => {
      console.log("server is listening on port 5000!");
    });
  } catch (error) {
    console.log("Failed connecction to database!");
  }
};

start();

const createUser = async () => {
  try {
    const user = await User.create({
      fname: "Hirvan",
      lname: "Sheladiya",
      email: "HS05@gmail.com",
      height: 5,
    });
    console.log("User created successfully.", user);
  } catch (error) {
    console.log("faild to create user", error);
  }
};
createUser();

const getAllUsers = async () => {
  try {
    const users = await User.findOne({ email: "HR53@gmail.com" });
    console.log(users);
  } catch (error) {
    console.log(error.message);
  }
};
getAllUsers();

const updateUser = async () => {
  try {
    const userUpdate = await User.findOneAndUpdate(
      { email: "HR53@gmail.com" },
      { fname: "Radha", lname: "Ribadiya", email: "Radha01@gmail.com" },
      { new: true }
    );
    console.log(userUpdate);
  } catch (error) {
    console.log(error.message);
  }
};
updateUser();

const deleteUser = async () => {
  try {
    const userDelete = await User.findOneAndDelete({
      email: "Radha01@gmail.com",
    });
    console.log(userDelete);
  } catch (error) {
    console.log(error.message);
  }
};
deleteUser();
