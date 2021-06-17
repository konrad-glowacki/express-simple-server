var http = require('http');
const port = process.env.PORT || 8080;

http.createServer(function (req, res) {
    console.log('Atlas security header tester received a request');

    var body = {
        'status': 'OK',
        'request': {
            'headers': req.headers
        }
    }

    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Strict-Transport-Security': 'null',
        'Content-Security-Policy': 'null',
        'X-Content-Type-Options': 'null',
        'X-Frame-Options': 'null',
        'X-XSS-Protection': 'null'
    });
    res.end(JSON.stringify(body, null, 4));
}).listen(port, () => {
    console.log('Atlas security header tester listening on port: ', port);
});
