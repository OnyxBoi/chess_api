const { db } = require('./db')

const { DataTypes } = require('sequelize')

const Player = db.define("players",
    {
        alias: {
            type: DataTypes.STRING,
            allowNull: false
        },
        identity: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },

    {
        // timestamps: false,
    }
);

module.exports = { Player };