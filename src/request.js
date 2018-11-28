const requester = require('request')
const qs = require('querystring')
const http = require('http')
const search = require('./search.js')



const requestModule = (input_value) => {
  input_value = input_value.toLowerCase();
    //construct url
  const product_url =
    `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${input_value}`


    var result = requester.get(product_url, (err, res, body) => {
      var data  = JSON.parse(body)
      var filtered = search(data);
    //   var filteredData = data.splice(0,5);
    //   var result = []
    //   result = filteredData.map(obj =>{
    //   return  {
    //       "brand": obj.brand,
    //       "name": obj.name,
    //       "image": obj.image_link,
    //       "price": obj.price,
    //       "currency": obj.price_sign
    //     }
    return filtered;
      })
  return result;
}

// var input_value =
//
// input_value.toLowerCase();
//     //construct url
//     const product_url =
//     `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${input_value}`
//
//   // use querystring module to convert object into a query
//   const queryString = qs.stringify({ api_key: process.env.API_KEY, tag: 'bear' })
//
//   //construct url
//   const randomGifAPIUrl = `http://api.giphy.com/v1/gifs/random?${queryString}`
//
//   //use the request module to make API call
//   requester.get(randomGifAPIUrl, (err, res, body) => {
//
//     // check for error AND correct status code AND content type
//     const { statusCode, headers } = res
//     const contentType = headers['content-type']
//     if (err || statusCode !== 200 || contentType !== 'application/json') {
//       // log the errors on the server
//       console.log(`Error ${err}`)
//       console.log(`Status Code: ${statusCode}`)
//       console.log(`Content Type: ${contentType}`)
//       // send a response back to the client
//       response.writeHead(500, { 'content-type': 'text/plain' })
//       response.end('Sorry, there was a server error')
//       return
//     }
//
//     // if above is ok, then parse the response body and put into img element
//     const { data } = JSON.parse(body)
//     const imgHtml = `<img src=${data.image_original_url} />`
//     response.writeHead(200, { 'content-type': 'text/html' })
//     response.end(imgHtml)
//   })
//
// }


//input_value = input_value.toLowerCase();
//   //construct url
//   const product_url =
//   `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${input_value}`
//
//
// requester.get(product_url, (err, res, body) => {
//   var data  = JSON.parse(body)
//   var filteredData = data.splice(0,5);
//   var result = []
//   result = filteredData.map(obj =>{
//   return  {
//       "brand": obj.brand,
//       "name": obj.name,
//       "image": obj.image_link,
//       "price": obj.price,
//       "currency": obj.price_sign
//     }
//   })
// //  const { statusCode, headers } = res
// //  finalresult = JSON.parse(JSON.stringify(result))
// console.log(result);
// // res.writeHead(200, {"Content-Type": "application/js"})
//  //res.end(result)
// })
// }
module.exports = (requestModule)
