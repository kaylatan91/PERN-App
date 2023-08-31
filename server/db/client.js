const { Client } = require('pg')

const cookbook = 'cookbook'
const client = new Client(`postgres://localhost:5432/${cookbook}`)

module.exports = client 