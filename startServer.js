const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (req, res) {
 var q = url.parse(req.url, true);
 var filename = "." + q.pathname;
 fs.readFile(filename, function(err, data) {
   if (err) {
     res.writeHead(404, {'Content-Type': 'text/html'});
     return res.end("404 Not Found");
   }
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write(data);
   return res.end();
 });
 transporter.sendMail(mailOptions, function(error, info){
   if (error) {
     console.log(error);
   } else {
     console.log('Email sent: ' + info.response);
   }
 });
}).listen(8080);
