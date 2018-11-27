const http = require('http');
const router = require('./router.js');
require('dotenv').config()

const PORT = process.env.PORT || 3000;

const server = http.createServer(router)
server.listen(PORT,()=>{
  console.log(` the server up and running on port ${PORT}!`);
});
