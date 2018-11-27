const http = require('http');
const PORT = 3000;
const router = require('./router.js');
const server = http.createServer(router)
server.listen(PORT,()=>{
  console.log(` the server up and running on port ${PORT}!`);
});
