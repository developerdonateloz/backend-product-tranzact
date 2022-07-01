const Product = require("../models/product");

const updateProduct = async (req, res) => {
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
        res.json(Product);
      }
    }
  );
};

module.exports = updateProduct;
