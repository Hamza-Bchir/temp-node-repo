const http = require('http');


const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page');
    }
    if(req.url==='/about'){
        res.end('Here is our history');
    }
    res.end(`<h1>Oops ! yezi ble tbarbish</h1>
    <p>Haya arjaa nayek aaych weldi <a href='/'>i winek</a></p>`);
});

server.listen(5000)
console.log('Server is listening on port 5000');
