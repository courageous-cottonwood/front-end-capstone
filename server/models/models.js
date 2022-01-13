const axios = require('axios');
const config = require('../../client/src/config/config');

module.exports = {
  getAllProducts: () => axios.get(
    'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/',
    {
      headers: { Authorization: config.API_KEY },
    },
  ),
  getProduct: (req) => axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.product_id}`,
    {
      headers: { Authorization: config.API_KEY },
    },
  ),
  getProductStyles: (req) => axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.product_id}/styles`,
    {
      headers: { Authorization: config.API_KEY },
    },
  ),
  getRelatedProducts: (req) => axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.product_id}/related`,
    {
      headers: { Authorization: config.API_KEY },
    },
  ),
  getReviews: (req) => axios.get(
    'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/',
    {
      params: req,
      headers: { Authorization: config.API_KEY },
    },
  ),
  getReviewsMeta: (req) => axios.get(
    'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta/',
    {
      params: req,
      headers: { Authorization: config.API_KEY },
    },
  ),
  postReviews: (req) => axios.post(
    'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/',
    req.body,
    {
      headers: { Authorization: config.API_KEY },
    },
  ),
  markReviewHelpful: (req) => axios.put(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${req.review_id}/helpful`,
    {},
    {
      headers: { Authorization: config.API_KEY },
    },
  ),
  reportReview: (req) => axios.put(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${req.review_id}/report`,
    {},
    {
      headers: { Authorization: config.API_KEY },
    },
  ),
  listQuestions: (req) => axios.get(
    'http://localhost:3000/qa/questions',
    {
      params: req,
      headers: { Authorization: config.API_KEY },
    },
  ),
  listAnswers: (req) => axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${req.query.question_id}/answers`,
    {
      params: req.query,
      headers: { Authorization: config.API_KEY },
    },
  ),
  postQuestion: (req) => axios.post(
    'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions',
    req.body,
    {
      headers: { Authorization: config.API_KEY },
    },
  ),
  postAnswer: (req) => axios.post(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${req.body.question_id}/answers`,
    req.body,
    {
      headers: { Authorization: config.API_KEY },
    },
  ),
  markQuestionHelpful: (req) => axios.put(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${req.body.question_id}/helpful`,
    {},
    {
      headers: { Authorization: config.API_KEY },
    },
  ),
  reportQuestion: (req) => axios.put(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${req.body.question_id}/report`,
    {},
    {
      headers: { Authorization: config.API_KEY },
    },
  ),
  markAnswerHelpful: (req) => axios.put(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/answers/${req.body.answer_id}/helpful`,
    {},
    {
      headers: { Authorization: config.API_KEY },
    },
  ),
  reportAnswer: (req) => axios.put(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/answers/${req.body.answer_id}/report`,
    {},
    {
      headers: { Authorization: config.API_KEY },
    },
  ),
  getCart: () => axios.get(
    'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/cart',
    {
      headers: { Authorization: config.API_KEY },
    },
  ),
  addToCart: (req) => axios.post(
    'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/cart',
    req.body,
    {
      headers: { Authorization: config.API_KEY },
    },
  ),
};
