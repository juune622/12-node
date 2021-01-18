const {sum} = require('./02.util');
const http = require('http');
const os = require('os');
const fs = require('fs');

const server =  http.createServer ((req,res)=>{
  res.setHeader('Content-type','text/html');
  res.end('<meta charset="utf-8"><h1>안녕하세요</h1>');
});

//console.log(os.cpus());
//console.log(os.freemem());
console.log(fs.readFileSync('./1.hello.js').toString());

server.listen(1000,'127.0.0.1');