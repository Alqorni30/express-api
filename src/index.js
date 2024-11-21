const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

dotenv.config();

const PORT = process.env.PORT_PRODUCTION || process.env.PORT_LOCAL;

app.use(cors({ origin: "*" }));

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Welcome to my API Bayo!!");
});

const productController = require("./product/product.controller");
// const categoryController = require("./category/category.controller");

// app.use("/kategori", categoryController);

app.use("/products", productController);

app.listen(PORT, () => {
  console.log("Express API running in port: " + PORT);
});
