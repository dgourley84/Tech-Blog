const { User } = require("../models");

const userData = [
  {
    username: "Dallas",
    password: "password1",
  },
  {
    username: "Vannesa",
    password: "password2",
  },
  {
    username: "Satya",
    password: "password3",
  },
  {
    username: "James",
    password: "password4",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;