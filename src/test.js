const tape = require('tape');
const supertest = require('supertest');
const router = require('./router');
const result = [
    { brand: 'colourpop',
      name: 'No Filter Foundation',
      image:
      'https://cdn.shopify.com/s/files/1/1338/0845/products/foundations-lineup_800x1200.jpg?v=1528927785',
      price: '12.0',
      currency: '$'
    },
    { brand: 'deciem',
      name: 'Serum Foundation',
      image:
      'https://3bc01d2807fb1bc0d25c-a86d2521f1af8989841b9619f5314be5.ssl.cf1.rackcdn.com/products/market-img/rdn-serum-foundation-30-r-30ml.png?v=6ab9fcb8ca2abb9828afcf9dcdad9f94',
      price: '6.7',
      currency: '$'
    },
    { brand: 'deciem',
      name: 'Coverage Foundation',
      image:
      'https://3bc01d2807fb1bc0d25c-a86d2521f1af8989841b9619f5314be5.ssl.cf1.rackcdn.com/products/market-img/rdn-coverage-foundation-33-n-30ml.png?v=daa322f179d80e450613c75826602292',
      price: '6.9',
      currency: '$'
    },
    { brand: 'w3llpeople',
      name: ' Realist Invisible Setting Powder',
      image:
      'https://www.purpicks.com/wp-content/uploads/2018/06/w3llpeople-Realist-Invisible-Setting-Powder.jpg',
      price: '0.0',
      currency: '$'
    },
    { brand: 'rejuva minerals',
      name: 'Pressed Powder Foundation',
      image:
      'https://www.purpicks.com/wp-content/uploads/2018/06/Rejuva-Minerals-Multi-Purpose-Powder-Eye-Shadow-Face-1.jpg',
      price: '0.0',
      currency: '$' } ];

tape('Testing tape', (t)=>{
  t.equal("test","test","its work");
  t.end();
})

tape('check status code is 200', (t) => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err)
      t.equal(res.statusCode,200, 'response should be 200');
      t.deepEqual(res.headers['content-type'], 'text/html' , 'response should be htmlFile');
      t.end();
    });
});
tape('check status code is 404', (t) => {
  supertest(router)
    .get('/pageNotFound')
    .expect(404)
    .end((err, res) => {
      t.error(err)
      t.equal(res.statusCode, 404 , 'response should be 404');
      t.end();
    });
});

tape('route test - get - header', (t) => {
  supertest(router)
    .post('/search/foundation')
    .expect(200)
    .expect('Content-Type','application/json')
    .end((err, res) => {
      t.error(err)
      t.deepEqual(res.text,JSON.stringify(result), 'The result should be 5 products ');
      t.end();
    });
});
