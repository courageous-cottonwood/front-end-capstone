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
app.get('/products/get', controllers.getProduct);

//get specific product styles
app.get('/products/styles', controllers.getProductStyles);

//get related products
app.get('/products/related', controllers.getRelatedProducts);

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
//   "product_id": 63609,
//   "rating": 1,
//   "summary": "this is good",
//   "body": "this is good",
//   "recommend": true,
//   "name": "this is good",
//   "email": "email@gmail.com",
//   "photos": [],
//   "characteristics": {}
// }

app.post('/reviews', controllers.postReviews);

// mark review as helpful

// object to send w/ body
// {
//   "review_id": 1115282
// }

app.put('/reviews/helpful', controllers.markReviewHelpful);

// report review

// object to send w/ body
// {
//   "review_id": 1115282
// }

app.put('/reviews/report', controllers.reportReview);

app.listen(port);