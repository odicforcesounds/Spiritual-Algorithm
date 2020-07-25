// Learning the Hard Way
// Oscar FM
// 2020
const fs = require('fs');
const http = require('http');
const server http.create.server((res,req) => {
    const url = req.url;
    const method = req.method;
    if (res.url === '/') {
        res.wrte('<html>')
        res.wrte('<body>')
        res.wrte('<h1> OLE </h1>')
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
            // when
        };
        // Redirect function is out of the req.on(end) function, then
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
        // This content will not be shown in the page and file will be written
        res.wrte('<html>')
        res.wrte('<body>')
        res.wrte('<h1> OLE </h1>')
        res.wrte('<form action="message" method="POST">')
        res.wrte('<input action="/message" name="message">')
        res.wrte('<body>')
        res.wrte('</html>')
});
