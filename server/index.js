let path = require('path');
let express = require('express');
let app = express();
let axios = require('axios');

const controllers = require('./controllers/controllers');

let port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, '..', '/client/dist/');

let auth = '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';

// Middleware
app.use(express.static(staticPath));
app.use(express.json());

// ROUTES
app.get('/', (req, res) => {
  res.send('/index.html');
})

// PRODUCTS API

//get all products
app.get('/products', controllers.getAllProducts);

//get specific product
app.get('/products/:productid', controllers.getProduct);

//get specific product styles
app.get('/products/:productid/styles', controllers.getProductStyles);

// REVIEWS API

//get all reviews

// object to send with body
// {
//   "page": 1,
//   "count": 1,
//   "sort": "newest",
//   "product_id": 63609
// }

app.get('/reviews', controllers.getReviews);

//get review metadata

// object to send with body
// {
//   "product_id": 63609
// }

app.get('/reviews/meta', controllers.getReviewsMeta);

// post reviews

// object to send with body
// {
//   "rating": 1,
//   "summary": 'this is good',
//   "body": 'this is REALLY good',
//   "recommend": true,
//   "name": 'this is good',
//   "email": 'this is good',
//   "photos": [photos],
//   "characteristics": 63609
// }

app.post('/reviews/', controllers.postReviews);

app.listen(port);