const { model, Schema } = require("mongoose");
const productSchema = new Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  categoria: { type: String, required: true },
});

module.exports = model("Product", productSchema);
