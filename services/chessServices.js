const { Player } = require("../models/chessModels");

async function createPlayer(Player) {
  
}

async function getPlayerById(id) {
  return await Player.findByPk(id);
}

async function getAllPlayers(criterias = {}) {
  
}

module.exports = { createPlayer, getPlayerById, getAllPlayers };
