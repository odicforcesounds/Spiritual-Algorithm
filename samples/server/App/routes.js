// Learning the Hard Way - Routing
// Oscar FM
// 2020
const http = require('http');
const fs = require('fs');

const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title> Super Title </title><head>');
        res.write('<body>');
        res.write('<form action="message" method="POST">');
        res.write('<input action="/message" name="message">');
        res.write('<body>');
        res.write('</html>');
        res.end();
    };
    if (url == '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();

            });
        });
    }
};

module.exports = requestHandler;
