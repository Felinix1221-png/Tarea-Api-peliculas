const express = require('express');
const sequelize = require('./models/database');
const peliculasRoutes = require('./routes/peliculas.routes');
const logger = require('./middlewares/logger');
const validarApiKey = require('./middlewares/validarApiKey');

const app = express();
const PORT = 3000;

// Middlewares globales
app.use(express.json()); // Para parsear el body en JSON
app.use(logger);         // Middleware de registro

// Rutas (Aplicando el middleware de API Key a todas las rutas de /peliculas)
app.use('/peliculas', validarApiKey, peliculasRoutes);

// Sincronizar base de datos e iniciar servidor
sequelize.sync({ force: false }) //false evita borrar los datos al reiniciar
    .then(() => {
        console.log('Base de datos SQLite sincronizada.');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch(error => console.error('Error al conectar con la base de datos:', error));