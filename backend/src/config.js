module.exports = {
  MYSQL_CONFIG: {
    connectionLimit: 50,
    host: 'localhost',
    user: 'bugtrackeruser',
    password: 'ITPMIU2022',
    database: 'bugtracker'
  },
  secret: 'not-so-secret-anymore',
  tokenExpires: 86400, // seconds
  saltRounds: 10
}