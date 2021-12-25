/* eslint-disable no-console */
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
    models.getProduct(req.query)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getProductStyles: (req, res) => {
    models.getProductStyles(req.query)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getRelatedProducts: (req, res) => {
    models.getRelatedProducts(req.query)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getReviews: (req, res) => {
    models.getReviews(req.query)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getReviewsMeta: (req, res) => {
    models.getReviewsMeta(req.query)
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
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  markReviewHelpful: (req, res) => {
    models.markReviewHelpful(req.query)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  reportReview: (req, res) => {
    models.reportReview(req.query)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
