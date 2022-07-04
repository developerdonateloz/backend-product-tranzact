const Product = require("../models/product");
const logger = require("../logger");

const insertProduct = async (req, res) => {
  const start = Date.now();

  const { nombre, precio, categoria } = req.body;
  Product.findOne({ nombre }).then((product) => {
    if (product) {
      return res.json({ mensaje: "Ya existe un producto con el mismo nombre" });
    } else if (!nombre || !precio || !categoria) {
      return res.json({
        mensaje: "Falta el nombre o el precio o la categoría",
      });
    } else {
      const newProduct = new Product({
        nombre,
        precio,
        categoria,
      });

      newProduct
        .save()
        .then((product) => {
          res.json({ mensaje: "Producto creado con éxito" });
        })
        .catch((error) => console.error(error));
      const end = Date.now();
      var duration = end - start;

      logger.log("info", `Service InsertProduct - Duración: ${duration}ms`);
    }
  });
};

module.exports = insertProduct;
