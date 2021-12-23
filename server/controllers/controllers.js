const models = require('../models/models');

module.exports = {
  getAllProducts: (req, res) => {
    models.getAllProducts()
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getProduct: (req, res) => {
    models.getProduct(req)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getProductStyles: (req, res) => {
    models.getProductStyles(req)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getReviews: (req, res) => {
    models.getReviews(req)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getReviewsMeta: (req, res) => {
    models.getReviewsMeta(req)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  postReviews: (req, res) => {
    models.postReviews(req)
      .then((response) => {
        res.send(response.ok);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};