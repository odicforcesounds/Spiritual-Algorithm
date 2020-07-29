// Learning the Hard Way
// Oscar FM
// 2020
// Understand life-cycles scripts
const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);

server.listen(3000);
