const express = require("express");
const {
  getAllProduct,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productControllers");
const productRouter = express.Router();

productRouter.get("/", getAllProduct);
productRouter.get("/:id", getSingleProduct);
productRouter.post("/", addProduct);
productRouter.patch("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

module.exports = productRouter;
