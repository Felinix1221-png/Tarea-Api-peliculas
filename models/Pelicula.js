const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const Pelicula = sequelize.define('Pelicula', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    director: {
        type: DataTypes.STRING,
        allowNull: false
    },
    año: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Pelicula;