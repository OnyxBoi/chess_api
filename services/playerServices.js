const { Player } = require("../models/playersModels");

async function createPlayer(player) {
    await Player.create(player)
}

async function getPlayerById(id) {
    return await Player.findByPk(id);
}

async function getAllPlayers(criterias = {}) {
    const where = {}

    if (criterias.name) {
        where.name = criterias.name
    }

    if (criterias.age) {
        where.age = criterias.age
    }

    if (criterias.nationality) {
        where.nationality = criterias.nationality
    }

    if (criterias.title) {
        where.title = criterias.title
    }

    if (criterias.nbGames) {
        where.nbGames = criterias.nbGames
    }

    if (criterias.wins) {
        where.wins = criterias.wins
    }

    if (criterias.losses) {
        where.losses = criterias.losses
    }

    if (criterias.draws) {
        where.draws = criterias.draws
    }

    return await Player.findAll({ where })
}

module.exports = { createPlayer, getPlayerById, getAllPlayers };
