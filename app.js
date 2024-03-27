const express = require('express')

const { db } = require('./models/db');

const app = express()
const port = 3000

app.use(express.json())


db.sync()
    .then(async () => {
        app.listen(port, () => {
            console.log(`Serveur running, triple moooooonstre on http://localhost:${port}`);
        })
    })
