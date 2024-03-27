const express = require("express");

const { db } = require("./models/db");

const app = express();
const PORT = 3000;

app.use(express.json());

// app.use("/api/v1/users", playerRouter)

db.sync().then(async () => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});