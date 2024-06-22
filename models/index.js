const dbConfig = require("../config/db.config")
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.db_url;
db.recipes = require("./recipe")(mongoose);
db.ingredients = require("./ingredient")(mongoose);
db.temples = require("./temples.js")(mongoose);
db.users = require("./users.js")(mongoose);

module.exports = db;