const pool = require('../service/db.js');

module.exports.getAllFiltered = (year_sem, callback) => {
    let sql = "SELECT * FROM Modules";
    const params = [];

    if (year_sem) {
        sql += " WHERE year_sem = ?";
        params.push(year_sem);
    }

    pool.query(sql, params, (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

