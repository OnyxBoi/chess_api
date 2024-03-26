const Sequelize = require("sequelize");

const db = new Sequelize("sqlite:chessapi.sqlite3", {
  // logging:false,
});

module.exports = { db };
