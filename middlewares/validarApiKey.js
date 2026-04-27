const validarApiKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    const API_KEY_SECRETA = 'Felix123';

    if (!apiKey || apiKey !== API_KEY_SECRETA) {
        return res.status(401).json({ error: 'Acceso no autorizado. API Key inválida o ausente.' });
    }
    
    next();
};

module.exports = validarApiKey;