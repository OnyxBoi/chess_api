const { Clubs } = require("../models/clubsModels");

async function createClub(club) {
    await Clubs.create(club)
}


// async function getClubById(id) {
//   return await Club.findByPk(id);
// }

// async function getAllClubs(criterias = {}) {

// }

module.exports = { createClub };
