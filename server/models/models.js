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
};
