const { db } = require('./db')

const { DataTypes } = require('sequelize')

const Clubs = db.define("clubs",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nbPlayers: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
);

module.exports = { Clubs };