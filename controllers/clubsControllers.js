const clubsServices = require("../services/clubsServices");

async function getClubById(req, res) {
    try {
        const id = req.params.id;

        const club = await clubsServices.getClubById(id);
        if (club) {
            res.json(club);
        } else {
            res.json({ error: `Club not found (id: ${id})` });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function getAllClubs(req, res) {
    try {
        const { name, nbPlayers } = req.query;
    
        const clubs = await clubsServices.getAllClubs({ name, nbPlayers });
        res.json(clubs);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}

async function createClub(req, res) {
    try {
        const club = await clubsServices.createClub(req.body);
        res.json(club);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getClubById,
    getAllClubs,
    createClub
};
