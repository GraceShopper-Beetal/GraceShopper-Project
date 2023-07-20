//this is the access point for all things database related!

const db = require('./db');
const Chips = require('./models/Chips');
const User = require('./models/User');

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Chips,
  },
};
