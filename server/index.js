let path = require('path');
let express = require('express');
let app = express();

let port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, '..', '/client/dist/');

// Middleware
app.use(express.static(staticPath));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('/index.html');
})

app.get('/products', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/`, {
    headers: { 'Authorization': auth } })
    .then((response) => {
      res.send(response.data);
    })
});

//get specific product
app.get('/products/:productid', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.params.productid}`,
    { headers: { 'Authorization': auth } })
    .then((response) => {
      res.send(response.data);
    })
});

//get specific product styles
app.get('/products/:productid/styles', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.params.productid}/styles`, {
    headers: { 'Authorization': auth }})
    .then((response) => {
      res.send(response.data);
    })
});

// REVIEWS API

//list reviews
// object to send with body
// {
//   "page": 1,
//   "count": 1,
//   "sort": "newest",
//   "product_id": 63609
// }

app.get('/reviews', (req, res) => {
  console.log(req.body);
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/`, {
    params: req.body,
    headers: { 'Authorization': auth }
  })
    .then((response) => {
      res.send(response.data);
    })
});

// object to send with body
// {
//   "product_id": 63609
// }

app.get('/reviews/meta', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/`, {
    params: req.body,
    headers: { 'Authorization': auth }
  })
    .then((response) => {
      res.send(response.data);
    })
});

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

app.post('/reviews/', (req, res) => {
  axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/`, {
    params: req.body,
    headers: { 'Authorization': auth }
  })
  .then((response) => {
    res.send(response.ok);
  })
});

app.listen(port);