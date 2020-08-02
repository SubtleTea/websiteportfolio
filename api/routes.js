var express = require('express');
var pool = require('./db');

var router = express.Router();

router.get('/api/get', (req, res) => {
    res.json('this is where some data would be')
})

router.get('/api/get/education', (req, res, next) => {
    pool.query('SELECT * FROM Education',
    (q_err, q_res) => {
        res.json(q_res.rows)
    })
})

router.get('/api/get/experience', (req, res, next) => {
    pool.query('SELECT * FROM Experience',
    (q_err, q_res) => {
        res.json(q_res.rows)
    })
})

module.exports = router;