const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

dotenv.config();

// const URL = process.env.URL_LOCAL;
const URL = process.env.URL_PRODUCTION;
const PORT = process.env.PORT;

app.use(cors({ origin: URL }));

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Welcome to my API Bayo");
});

const productController = require("./product/product.controller");

app.use("/products", productController);

app.listen(PORT, () => {
  console.log("Express API running in port: " + PORT);
});
