const path = require('path');
var cors = require('cors');
var compression = require('compression')

const express = require('express');

const app = express();

const controllers = require('./controllers/controllers');

const port = process.env.PORT || 3001;

app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

const staticPath = path.join(__dirname, '..', '/client/dist/');

// Middleware
app.use(express.static(staticPath));
app.use(express.json());
app.use(cors());
app.use(compression());

// PRODUCTS API

// GET ALL PRODUCTS
app.get('/products', controllers.getAllProducts);

// GET SPECIFIC PRODUCT
// required query param product_id: 63609
app.get('/products/get', controllers.getProduct);

// GET SPECIFIC PRODUCT STYLES
// required query param product_id: 63609
app.get('/products/styles', controllers.getProductStyles);

// GET RELATED PRODUCTS
// required query param product_id: 63609
app.get('/products/related', controllers.getRelatedProducts);

// REVIEWS API

// GET ALL REVIEWS
// query params:
//   "product_id": 63609
app.get('/reviews', controllers.getReviews);

// GET REVIEW METADATA
// query params:
//   "product_id": 63609
app.get('/reviews/meta', controllers.getReviewsMeta);

// POST REVIEW
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

// MARK REVIEW AS HELPFUL
// query params
// {
//   "review_id": 1115282
// }
app.put('/reviews/helpful', controllers.markReviewHelpful);

// REPORT REVIEW
// query params
// {
//   "review_id": 1115282
// }
app.put('/reviews/report', controllers.reportReview);

// LIST QUESTIONS
// product_id query required: 63609
app.get('/qa/questions', controllers.listQuestions);

// LIST ANSWERS
// question_id query required: 553786
app.get('/qa/answers', controllers.listAnswers);

// ADD QUESTION
// object to send in body:
// {
//   "body": "hello",
//   "name": "brandon",
//   "email": "email@gmail.com",
//   "product_id": 63609
// }
app.post('/qa/questions', controllers.postQuestion);

// ADD ANSWER
// query params: question_id: 553786
// object to send in body:
// {
//   "body": "hello",
//   "name": "brandon",
//   "email": "email@gmail.com",
//   "photos": []
// }
app.post('/qa/answers', controllers.postAnswer);

// MARK QUESTION HELPFUL
// query params: question_id: 553786
app.put('/qa/questions/helpful', controllers.markQuestionHelpful);

// REPORT QUESTION
// query params: question_id: 553786
app.put('/qa/questions/report', controllers.reportQuestion);

// MARK ANSWER HELPFUL
// query params: answer_id: 5269101
app.put('/qa/answers/helpful', controllers.markAnswerHelpful);

// REPORT ANSWER
// query params: answer_id: 5269101
app.put('/qa/answers/report', controllers.reportAnswer);

// GET CART
app.get('/cart', controllers.getCart);

// ADD TO CART
// object to send in body:
// {
//   "sku_id": ???
// }
app.post('/cart', controllers.addToCart);

// ROUTES
app.get('/:productId', (req, res) => {
  res.sendFile(staticPath + 'index.html');
});

app.get('/', (req, res) => {
  res.sendFile('index.html');
});



app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});
