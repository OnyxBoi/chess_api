const express = require('express');
const router = express.Router();

const playerController = require("../controllers/playersControllers");

router.get('/', playerController.getAllPlayers);
router.post('/', playerController.createPlayer);
router.get("/:id", playerController.getPlayerById);


module.exports = router;