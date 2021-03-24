const knexfile = require('./knexfile')

const pg = require('pg-promise')()

const db = pg({
  "host": "localhost",
  "port": 5432,
  "database": "lms",
  "user": "erwinssaget"
})

module.exports = db;
