// http , https , fs , path , os
const http = require('http');//protocol created
const bodyParser = require('body-parser');
const fs = require('fs');

// function reqListener(req, res){
//     console.log("Hello, World!");
// }

// const server = http.createServer(reqListener);

const server = http.createServer((req,res) => {
    //console.log(req.url , ';', req.method,';' , req.headers);
    const url = req.url;
    const method = req.method;
    const data = [];
    if(url == '/'){
        res.setHeader('Content-Type' , 'text/html');
        res.write("<html><head><title>DemoApp</title></head>");
        res.write("<body><form method = 'POST' action = '/messages'><input type = 'text' name = 'textMessage' placeholder = 'Enter Name'><br><input type = 'text' name = 'textMessage2' placeholder = 'Enter Something'><input type = 'submit' value = 'Send Message!'></form>");
        res.write("</body></html>");
        return res.end();
    }
    else if(url == '/messages' && method == 'POST'){
        req.on('data' , (chunk) => {
            data.push(chunk);
        })
        req.on('end' , (err) => {
            //console.log(err);
            console.log(data);
            let result = Buffer.concat(data).toString();
            console.log(result);
            fs.writeFileSync('messages.txt' , result);
        })

        res.setHeader('Content-Type' , 'text/html');
        res.write("<html><body><h3>Message Sent!</h3></body></html>")
        return res.end();
    }
    else {
        res.setHeader('Content-Type' , 'text/html');
        res.write("<html><head><title>DemoApp</title></head>");
        res.write("<body><h1>Welcome To Node.Js !</h1>");
        res.write("</body></html>");    
        res.end();
    }
});

server.listen(3000); // port number