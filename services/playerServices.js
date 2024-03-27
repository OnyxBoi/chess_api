const { Player } = require("../models/playersModels");

async function createPlayer(player) {
    await Player.create(player)
}


// async function getPlayerById(id) {
//   return await Player.findByPk(id);
// }

// async function getAllPlayers(criterias = {}) {

// }

module.exports = { createPlayer };
