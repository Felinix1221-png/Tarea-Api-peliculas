const logger = (req, res, next) => {
    const fecha = new Date().toISOString();
    console.log(`[${fecha}] ${req.method} a la ruta ${req.originalUrl}`);
    next();
};

module.exports = logger;