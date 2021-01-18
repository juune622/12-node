

const http =require('http');

const server =http.createServer(onCreateServer);

server.listen(3000,()=>{console.log('http://127.0.0.1:3000')});

function onCreateServer(req,res){
if(req.url == '/'){
  res.end('hello root')
}else if(req.url == '/Juune'){
  res.end('hello Juune')
}else{
  res.end('File not found!')
}
}