require('dotenv-safe').config()

const movies = require('./api/movies')
const server = require('./server/server')
const repository = require('./repository/repository')

server.start(movies, repository, (err, app) => {
  console.log('Just started');
  console.log(process.env.MONGO_CONNECTION);
  console.log(process.env.DATABASE_NAME);
  console.log(process.env.PORT);
})
