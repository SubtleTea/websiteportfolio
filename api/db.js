const { Pool } = require('pg');

const pool = new Pool({
    user: 'yes',
    host: 'localhost',
    database: 'postgres';
    password: '',
    post: 5432
});

module.exports = pool;