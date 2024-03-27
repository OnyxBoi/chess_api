const { Club } = require("../models/clubsModels");

async function createClub(club) {
    await Club.create(club)
}


// async function getClubById(id) {
//   return await Club.findByPk(id);
// }

// async function getAllClubs(criterias = {}) {

// }

module.exports = { createPlayer };
