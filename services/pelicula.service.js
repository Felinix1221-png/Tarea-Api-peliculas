const Pelicula = require('../models/Pelicula');

const obtenerTodas = async () => {
    return await Pelicula.findAll();
};

const obtenerPorId = async (id) => {
    return await Pelicula.findByPk(id);
};

const crear = async (datosPelicula) => {
    return await Pelicula.create(datosPelicula);
};

const actualizar = async (id, datosPelicula) => {
    const pelicula = await Pelicula.findByPk(id);
    if (!pelicula) return null;
    return await pelicula.update(datosPelicula);
};

const eliminar = async (id) => {
    const pelicula = await Pelicula.findByPk(id);
    if (!pelicula) return false;
    await pelicula.destroy();
    return true;
};

module.exports = {
    obtenerTodas,
    obtenerPorId,
    crear,
    actualizar,
    eliminar
};