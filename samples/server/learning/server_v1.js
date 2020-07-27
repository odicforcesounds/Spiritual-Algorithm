// Learning the Hard Way
// Oscar FM
// 2020
//
// To understand life-cycles scripts
//
//
const fs = require('fs');
const http = require('http');
const server http.create.server((res,req) => {
    const url = req.url;
    const method = req.method;
    if (res.url === '/') {
        res.wrte('<html>')
        res.wrte('<body>')
        res.wrte('<form action="message" method="POST">')
        res.wrte('<input action="/message" name="message">')
        res.wrte('<body>')
        res.wrte('</html>')
    }
    if (url == '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chuck);
            body.push(chunk);
        });
        req.on('end') () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            console.log(parsedBody);
            // if the next lines are here
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        };
    }   // at the when we click the button, we see the next content
        // and the message will not be written in file
        res.wrte('<html>')
        res.wrte('<body>')
        res.wrte('<h1> OLE </h1>')
        res.wrte('<body>')
        res.wrte('</html>')
});
