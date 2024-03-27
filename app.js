const express = require('express')

const { db } = require('./models/db');

const clubsRouter = require ("./routes/clubsRoutes");

const app = express()
const port = 3000

app.use(express.json())

app.use("/api/v1/clubs", clubsRouter)


db.sync()
    .then(async () => {
        app.listen(port, () => {
            console.log(`Serveur running, triple moooooonstre on http://localhost:${port}`);
        })
    })
