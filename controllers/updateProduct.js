const Product = require("../models/product");
const config = require("../config/config");
const logger = require("../logger");

const updateProduct = async (req, res) => {
  const apiKeyValue = req.header("ApiKey");
  if (apiKeyValue !== config.ApiKeySecret) {
    return res.status(401).send("Not authorized");
  }

  const start = Date.now();
  const id = req.params.id;

  Product.findByIdAndUpdate(
    {
      _id: id,
    },
    {
      $set: {
        nombre: req.body.nombre,
        precio: req.body.precio,
        categoria: req.body.categoria,
      },
    },
    { new: true },
    (err, Product) => {
      if (err) {
        res.json({ mensaje: "No se pudo actualizar el producto con ID" });
      } else {
        const end = Date.now();
        var duration = end - start;

        logger.log("info", `Service UpdateProduct - Duración: ${duration}ms`);
        res.json(Product);
      }
    }
  );
};

module.exports = updateProduct;
