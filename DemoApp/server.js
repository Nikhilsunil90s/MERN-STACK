// http , https , fs , path , os
const http = require('http');

// function reqListener(req, res){
//     console.log("Hello, World!");
// }

// const server = http.createServer(reqListener);

const server = http.createServer((req,res) => {
    //console.log(req.url , ';', req.method,';' , req.headers);
    const url = req.url;
    if(url == '/'){
        res.setHeader('Content-Type' , 'text/html');
        res.write("<html><head><title>DemoApp</title></head>");
        res.write("<body><form method = 'POST' action = '/messages'><input type = 'text'><br><input type = 'submit' value = 'Send Message!'></form>");
        res.write("</body></html>");
        return res.end();
    }
    res.setHeader('Content-Type' , 'text/html');
    res.write("<html><head><title>DemoApp</title></head>");
    res.write("<body><h1>Welcome To Node.Js !</h1>");
    res.write("</body></html>");
    res.end();
});

server.listen(3000); // port number