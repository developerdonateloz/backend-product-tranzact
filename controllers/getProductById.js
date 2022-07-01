const logger = require("../logger");
const Product = require("../models/product");

const getProductoById = async (req, res) => {
  logger.log("info", "Service getProductById starting");
  const id = req.params.id;

  if (id.length === 24) {
    Product.findById(id).then((product) => {
      if (!product) {
        return res.json({ mensaje: "No existe el producto con el ID enviado" });
      } else {
        logger.log("info", "Service getProductById ending");
        return res.json(product._doc);
      }
    });
  } else {
    return res.json();
  }
};

module.exports = getProductoById;
