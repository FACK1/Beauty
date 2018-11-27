// const fs = require('fs');
// const path = require('path');
// const requester = require('request');
// const querystring = require('querystring');
// const http = require('http');
//
// const search = (value) => {
//   value = value.toLowerCase();
//   var result = parsedFile.filter(el => el.toLowerCase().includes(value));
//   const searchurl = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${value}`
//   requester.get(searchurl, (err, res, body) => {
// 		const result = JSON.parse(body);
// 		const finalResult = result.data;
// 		response.writeHead(200,{'Content-Type' : 'text/html'})
// 		response.end(finalResult)
//     })
// };
//
// module.exports = search;
