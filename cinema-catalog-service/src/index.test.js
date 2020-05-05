require('dotenv-safe').config()

console.log('##### mongodb #####');

require('./config/mongodb.test').runTests()

console.log('##### server #####');

require('./server/server.test').runTests()

console.log('##### repository #####');

require('./repository/repository.test').runTests()

console.log('##### cinema-catalog #####');

require('./api/cinema-catalog.test').runTests()

console.log('##### Fim dos Testes #####');

process.on('exit', function(code) {
    return console.log(`About to exit with code ${code}`);
});
