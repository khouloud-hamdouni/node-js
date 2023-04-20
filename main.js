const http = require('http');
const fs = require('fs');  
const port = 3000;

http.createServer((req, res) => {
   fs.readFile('hello.html', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'});  
      res.write(data);
      res.end();  
   });
}).listen(port, () => console.log(`Server listening at port ${3000}`));