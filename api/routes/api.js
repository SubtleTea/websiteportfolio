var express = require('express');
var router = express.Router();
var pool = require('./db');

router.get('/', (req, res, next) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
});

router.get('/education', (req, res, next) => {
    pool.query('SELECT * FROM "Education"',
    (q_err, q_res) => {
        res.json(q_res)
    });
});


module.exports = router;