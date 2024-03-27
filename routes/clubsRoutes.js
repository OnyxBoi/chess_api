const express = require('express');
const router = express.Router();

const clubsControllers = require("../controllers/clubsControllers");

router.get('/', clubsControllers.getAllClubs);
router.post('/', clubsControllers.createClub);
router.get("/:id", clubsControllers.getClubById);


module.exports = router;