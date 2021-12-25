const axios = require('axios');

const auth = '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';

module.exports = {
  getAllProducts: () => axios.get(
    'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/',
    {
      headers: { Authorization: auth },
    },
  ),
  getProduct: (req) => axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.product_id}`,
    {
      headers: { Authorization: auth },
    },
  ),
  getProductStyles: (req) => axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.product_id}/styles`,
    {
      headers: { Authorization: auth },
    },
  ),
  getRelatedProducts: (req) => axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.product_id}/related`,
    {
      headers: { Authorization: auth },
    },
  ),
  getReviews: (req) => axios.get(
    'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/',
    {
      params: req,
      headers: { Authorization: auth },
    },
  ),
  getReviewsMeta: (req) => axios.get(
    'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta/',
    {
      params: req,
      headers: { Authorization: auth },
    },
  ),
  postReviews: (req) => axios.post(
    'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/',
    req.body,
    {
      headers: { Authorization: auth },
    },
  ),
  markReviewHelpful: (req) => axios.put(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${req.review_id}/helpful`,
    {},
    {
      headers: { Authorization: auth },
    },
  ),
  reportReview: (req) => axios.put(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${req.review_id}/report`,
    {},
    {
      headers: { Authorization: auth },
    },
  ),
  listQuestions: (req) => axios.get(
    'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions',
    {
      params: req,
      headers: { Authorization: auth },
    },
  ),
  listAnswers: (req) => axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${req.query.question_id}/answers`,
    {
      params: req.query,
      headers: { Authorization: auth },
    },
  ),
  postQuestion: (req) => axios.post(
    'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions',
    req.body,
    {
      headers: { Authorization: auth },
    },
  ),
  postAnswer: (req) => axios.post(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${req.query.question_id}/answers`,
    req.body,
    {
      headers: { Authorization: auth },
    },
  ),
  markQuestionHelpful: (req) => axios.put(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${req.query.question_id}/helpful`,
    {},
    {
      headers: { Authorization: auth },
    },
  ),
  reportQuestion: (req) => axios.put(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${req.query.question_id}/report`,
    {},
    {
      headers: { Authorization: auth },
    },
  ),
  markAnswerHelpful: (req) => axios.put(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/answers/${req.query.answer_id}/helpful`,
    {},
    {
      headers: { Authorization: auth },
    },
  ),
  reportAnswer: (req) => axios.put(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/answers/${req.query.answer_id}/report`,
    {},
    {
      headers: { Authorization: auth },
    },
  ),
  getCart: () => axios.get(
    'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/cart',
    {
      headers: { Authorization: auth },
    },
  ),
  addToCart: (req) => axios.post(
    'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/cart',
    req.body,
    {
      headers: { Authorization: auth },
    },
  ),
};
