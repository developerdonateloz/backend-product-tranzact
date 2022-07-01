const Product = require("../models/product");
const logger = require("../logger");

const insertProduct = async (req, res) => {
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
    }
  });
};

module.exports = insertProduct;
