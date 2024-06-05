const db = require('../config/databases');

const Gizi = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM gizi';
        db.query(sql, callback)
    },
    getById: (id, callback) => {
        const sql = 'SELECT * FROM gizi WHERE ID = ?';
        db.query(sql, [id], callback);
    },
    create: (newgizi, callback) => {
        const sql = 'INSERT INTO gizi SET ?';
        db.query(sql, newgizi, callback);
    },
    update: (id, updategizi, callback) => {
        const sql = 'UPDATE gizi SET ? WHERE ID = ?';
        db.query(sql, [updategizi, id], callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM gizi WHERE ID = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Gizi;