const playerService = require("../services/playerServices");

async function getPlayerById(req, res) {
    try {
        const id = req.params.id;

        const player = await playerService.getPlayerById(id);
        if (player) {
            res.json(player);
        } else {
            res.json({ error: `Player not found (id: ${id})` });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function getAllPlayers(req, res) {
    try {
        const { name, age, nationality, title, nbGames, wins, losses, draws } = req.query;
        const players = await playerService.getAllPlayers({ name, age, nationality, title, nbGames, wins, losses, draws })
        res.json(players)
    }

    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

async function createPlayer(req, res) {
    try {
        const player = await playerService.createPlayer(req.body);
        res.json(player);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    createPlayer,
    getPlayerById,
    getAllPlayers
};
