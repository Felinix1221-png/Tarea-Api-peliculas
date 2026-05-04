const jwt = require('jsonwebtoken');

const validarToken = (req, res, next) => {
    // Header de autorizacion
    const authHeader = req.headers['authorization'];
    const SECRET_KEY = 'mi_clave_secreta_super_segura';

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({ error: 'Acceso denegado. Token requerido o formato inválido.' });
    }

    // Extraer solo el token
    const token = authHeader.split(' ')[1];

    // Verificar token
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Token inválido o expirado.' });
        }
        
        // Guardar datos usuario (request)
        req.user = decoded;
        next();
    });
};

module.exports = validarToken;