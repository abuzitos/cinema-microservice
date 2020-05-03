//require('dotenv-safe').load();
require('dotenv-safe').config()

const cinemaCatalog = require('./api/cinema-catalog');
const server = require ('./server/server');
const repository = require('./repository/repository');

server.start(cinemaCatalog, repository, (err, app) => {
    console.log('Just started');
    console.log(process.env.MONGO_CONNECTION);
    console.log(process.env.DATABASE_NAME);
    console.log(process.env.PORT);
});
