const express = require('express')

const { db } = require('./models/db');

const playerRouter = require('./routes/playersRoutes')

const app = express()
const port = 3000

app.use(express.json())

app.use("/api/v1/players", playerRouter)

const { createPlayer } = require('./services/playerServices');


db.sync()
    .then(async () => {
        // createPlayer({
        //     "name": "Fabiano Caruana",
        //     "age": 29,
        //     "nationality": "American",
        //     "title": "Grandmaster",
        //     "nbGames": 600,
        //     "wins": 400,
        //     "losses": 150,
        //     "draws": 50
        // })
        app.listen(port, () => {
            console.log(`Serveur running, triple moooooonstre on http://localhost:${port}`);
        })
    })