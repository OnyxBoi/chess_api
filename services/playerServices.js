const { Player } = require("../models/playersModels");

async function createPlayer(player) {
    await player.create(Player)
}


// async function getPlayerById(id) {
//   return await Player.findByPk(id);
// }

// async function getAllPlayers(criterias = {}) {

// }

module.exports = { createPlayer };
