const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: '192.168.1.9',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
})

const getConfig = (request, response) => {
    pool.query('SELECT * FROM "Config"', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getDalyLog = (request, response) => {
    pool.query('SELECT * FROM "DalyLog"', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


module.exports = {
  getConfig,
  getDalyLog
}