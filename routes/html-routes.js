const path = require('path');
const db = require('../models');

module.exports = app => {
    app.get('/exercise', (req, res) => res.sendFile(path.join(__dirname, '../public/exercise.html')));
    app.get('/stats', (req, res) => res.sendFile(path.join(__dirname, '../public/stats.html')));
}