const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const SECRET_KEY = 'mi_clave_secreta_super_segura'; // Debe coincidir con el del middleware

// Usuario simulado (En un caso real)
const usuarioMock = {
    id: 1,
    username: 'admin',
    password: 'password123'
};

// POST -> auth/login
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === usuarioMock.username && password === usuarioMock.password) {
        // Generamos el payload
        const payload = { id: usuarioMock.id, username: usuarioMock.username };
        
        // Firmamos el token
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
        
        res.json({ mensaje: 'Autenticación exitosa', token });
    } else {
        res.status(401).json({ error: 'Credenciales inválidas' });
    }
});

module.exports = router;