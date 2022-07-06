const logger = require("../logger");
const Product = require("../models/product");
const config = require("../config/config");

const getProductoById = async (req, res) => {
  const apiKeyValue = req.header("ApiKey");
  if (apiKeyValue !== config.ApiKeySecret) {
    return res.status(401).send("Not authorized");
  }

  const start = Date.now();

  const id = req.params.id;

  if (id.length === 24) {
    Product.findById(id).then((product) => {
      if (!product) {
        return res
          .status(404)
          .json({ mensaje: "No existe el producto con el ID enviado" });
      } else {
        const end = Date.now();
        var duration = end - start;

        logger.log("info", `Service GetProductById - Duración: ${duration}ms`);
        return res.json(product._doc);
      }
    });
  } else {
    return res.json();
  }
};

module.exports = getProductoById;
