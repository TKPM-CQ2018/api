const productModel = require("../models/productModel");
const product = require("../models/product.model");
exports.detail = async (req, res, next) => {
  listProduct = await product.getAllProduct();
  console.log(listProduct);
  res.send(listProduct);
};
