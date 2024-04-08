const { Clubs } = require("./clubsModels");
const { Player } = require("./playersModels");

Clubs.hasMany(Player)

Player.belongsTo(Clubs)

module.exports = { Clubs, Player }
