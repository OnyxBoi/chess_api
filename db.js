const Sequelize = require('sequelize');

const db = new Sequelize("sqlite:database.chessapi", {

})

module.exports = { db };