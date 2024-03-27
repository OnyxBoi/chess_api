const { db } = require('./db')

const { DataTypes } = require('sequelize')

const Player = db.define("players",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nationality: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nbGames: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        wins: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        losses: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        draws: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }
);

const Clubs = db.define("clubs",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        listPlayers: {
            type: DataTypes.ARRAY,
            allowNull: false
        },
        nbPlayers: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
);

module.exports = { Player };