const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: '192.168.1.9',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
})

const getData = (request, response) => {
    pool.query('SELECT * FROM "Farmers"', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getData
}