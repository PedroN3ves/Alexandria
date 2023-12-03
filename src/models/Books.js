const { DataTypes } = require('sequelize');

const db = require('../database/conn');

const Books = db.define('Books', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    pages_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    author: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Books
