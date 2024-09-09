const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById,
  editProductById,
} = require("./product.service");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await getAllProducts();
    
    // Kirim respon dengan status, error, dan data
    res.status(200).json({
      statusCode: 200,
      message: "Success",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      error: error.message,
      data: null,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const productId = (req.params.id);
    const product = await getProductById(productId);

    res.status(200).json({
      statusCode: 200,
      message: "Success",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      statusCode: 400,
      error: error.message,
      data: null,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const newProductData = req.body;
    const product = await createProduct(newProductData);

    res.status(201).json({
      statusCode: 201,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      statusCode: 400,
      error: error.message,
      data: null,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const productId = (req.params.id);
    await deleteProductById(productId);

    res.status(200).json({
      statusCode: 200,
      message: "Success",
      data: `Product with ID ${productId} deleted successfully`,
    });
  } catch (error) {
    res.status(400).json({
      statusCode: 400,
      error: error.message,
      data: null,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const productId = (req.params.id);
    const productData = req.body;

    const product = await editProductById(productId, productData);

    res.status(200).json({
      statusCode: 200,
      message: "Success",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      statusCode: 400,
      error: error.message,
      data: null,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const productId = (req.params.id);
    const productData = req.body;

    const product = await editProductById(productId, productData);

    res.status(200).json({
      statusCode: 200,
      error: null,
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      statusCode: 400,
      error: error.message,
      data: null,
    });
  }
});

module.exports = router;
