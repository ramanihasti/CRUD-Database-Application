const mongooes = require("mongoose");

const productSchema = new mongooes.Schema({
  name: { type: String, minLength: 2, maxLength: 100, require: true },
  desc: { type: String, minLength: 10, maxLength: 1000 },
  price: { type: Number, min: 0, require: true },
  discountPrencentage: { type: Number, min: 0, max: 100, default: 0 },
});

const Product = mongooes.model("Product", productSchema);

module.exports = Product;

// databse ke collecction ko create karne ke liye kuch rules/regulation schema me banaye hain.
// rules ke alawa koi different record insert karonge to nahi honaga.
