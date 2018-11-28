const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
const requestModule = require('./request.js');
const requester = require('request');
const search = require('./search.js');

//-----------------------------------------------------------------------------

const homeHandler = (request, response) => {
  const htmlPath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(htmlPath, (error, file) => {
    if (error) {
      notFoundHandler(request, response);
      return;
    }
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(file);
  });
};

//-----------------------------------------------------------------------------

const publicHandler = (request, response) => {
  const extention = request.url.split('.')[1];
  const ContentTypeMapping = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/js',
    jpg: 'image/jpg',
    png: 'image/png',
    ico: 'image/x-ico',
  };

  if (ContentTypeMapping[extention] === undefined) {
    notFoundHandler(request, response);
    return;
  }

  const filePath = path.join(__dirname, '..', 'public', request.url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.end('<h1>Sorry, There is an error!</h1>');
      return;
    }
    response.writeHead(200, { 'Content-Type': ContentTypeMapping[extention] });
    response.end(file);
  });
};

//-----------------------------------------------------------------------------

const searchHandler = (request, response) => {
  var value = request.url.split('/')[2];
  if (value === undefined) {
    response.writeHead(404, { 'Content-Type': 'text/plain' }); // we need to handle the error input
    response.end('error');
  } else {

  const product_url =
  `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${value}`

  requester.get(product_url, (err, res, body) => {
      var data  = JSON.parse(body)
      var filteredData = data.splice(0,6);
      var result = filteredData.map(obj =>{
      return  {
          "brand": obj.brand,
          "name": obj.name,
          "image": (obj.image_link).split('?')[0],
          "price": obj.price,
          "currency": obj.price_sign
        }
  })
console.log(result)
var convertedData = JSON.stringify(result);
response.writeHead(200, {"Content-Type": "application/json"});
response.end(convertedData);

      })
}
    }

//-----------------------------------------------------------------------------

const notFoundHandler = (request, response) => {
  response.writeHead(404)
  return response.end('Page not found!')
}
module.exports = { homeHandler, publicHandler, searchHandler, notFoundHandler};
