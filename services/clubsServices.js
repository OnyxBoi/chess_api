const { Clubs } = require("../models/clubsModels");

async function createClub(club) {
    await Clubs.create(club)
}


async function getClubById(id) {
  return await Club.findByPk(id);
}

async function getAllClubs(criterias = {}) {
    const where = {};
    if (criterias.name){
        where.name = criterias.name;
    }
    if (criterias.nbPlayers){
        where.nbPlayers = criterias.nbPlayers;
    }

    return await Clubs.findAll({ where });
}

module.exports = { createClub, getClubById, getAllClubs };
