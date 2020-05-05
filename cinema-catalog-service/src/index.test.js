require('dotenv-safe').config()
require('./config/mongodb.test').runTests()
require('./server/server.test').runTests()
require('./repository/repository.test').runTests()
require('./api/cinema-catalog.test').runTests()

process.on('exit', function(code) {
    return console.log(`About to exit with code ${code}`);
});
