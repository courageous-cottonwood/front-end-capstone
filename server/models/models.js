const axios = require('axios');

const auth = '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';

module.exports = {
  getAllProducts: () =>
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/`, {
      headers: { Authorization: auth } }),
  getProduct: (req) =>
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.params.productid}`,
      { headers: { Authorization: auth } }),
  getProductStyles: (req) =>
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.params.productid}/styles`, {
      headers: { Authorization: auth } }),
  getReviews: (req) =>
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/`, {
      params: req.body,
      headers: { Authorization: auth },
    }),
  getReviewsMeta: (req) =>
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/`, {
      params: req.body,
      headers: { Authorization: auth },
    }),
  postReviews: (req) =>
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/`, {
      params: req.body,
      headers: { Authorization: auth },
    }),
}