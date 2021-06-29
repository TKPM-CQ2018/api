const productModel = require("../models/productModel");

exports.detail = (req, res, next) => {
  res.send(productModel.list());
};
