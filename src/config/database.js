module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'secret',
  database: 'data-nodejs',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  }
}
