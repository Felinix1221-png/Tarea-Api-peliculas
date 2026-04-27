const express = require('express');
const router = express.Router();
const peliculaService = require('../services/pelicula.service');

// GET -> (Obtener todas)
router.get('/', async (req, res) => {
    const peliculas = await peliculaService.obtenerTodas();
    res.json(peliculas);
});

// GET (ID) -> (Obtener una)
router.get('/:id', async (req, res) => {
    const pelicula = await peliculaService.obtenerPorId(req.params.id);
    if (!pelicula) return res.status(404).json({ error: 'Película no encontrada' });
    res.json(pelicula);
});

// POST -> (Crear)
router.post('/', async (req, res) => {
    try {
        const nuevaPelicula = await peliculaService.crear(req.body);
        res.status(201).json(nuevaPelicula);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear la película' });
    }
});

// PUT -> (Actualizar)
router.put('/:id', async (req, res) => {
    const peliculaActualizada = await peliculaService.actualizar(req.params.id, req.body);
    if (!peliculaActualizada) return res.status(404).json({ error: 'Película no encontrada' });
    res.json(peliculaActualizada);
});

// DELETE -> (Eliminar)
router.delete('/:id', async (req, res) => {
    const eliminada = await peliculaService.eliminar(req.params.id);
    if (!eliminada) return res.status(404).json({ error: 'Película no encontrada' });
    res.json({ mensaje: 'Película eliminada correctamente' });
});

module.exports = router;