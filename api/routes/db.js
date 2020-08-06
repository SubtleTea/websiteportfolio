const { Pool } = require('pg');

const pool = new Pool({
    user: '',
    host: 'localhost',
    database: 'Website-Portfolio',
    password: '',
    port: 5000
})

pool.connect((err, client, release) => {
    if (err) {
        return console.error('Could not connect', err.stack)
    }
})

module.exports = pool;