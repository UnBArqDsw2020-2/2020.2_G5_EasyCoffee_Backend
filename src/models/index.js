const mongoose = require('../database');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.user = require("./User");
db.role = require("./Role");

db.ROLES = ["user", "admin"];

module.exports = db;