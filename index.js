const express = require('express');
const sequelize = require('./database');
const peliculasRoutes = require('./routes/peliculas.routes');
const authRoutes = require('./routes/auth.routes'); // Importamos las rutas de login
const logger = require('./middlewares/logger');
const validarToken = require('./middlewares/validarToken'); // Importamos el middleware JWT

const app = express();
const PORT = 3000;

// Middlewares globales
app.use(express.json()); 
app.use(logger);         
app.use('/auth', authRoutes);
app.use('/peliculas', validarToken, peliculasRoutes);

// Sincronizar base de datos e iniciar servidor
sequelize.sync({ force: false }) // false evita borrar los datos al reiniciar
    .then(() => {
        console.log('Base de datos SQLite sincronizada.');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch(error => console.error('Error al conectar con la base de datos:', error));