const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

dotenv.config();

// const URL = process.env.URL_LOCAL;
const URL = process.env.URL_PRODUCTION || process.env.URL_LOCAL;
const PORT = process.env.PORT_PRODUCTION || process.env.PORT_LOCAL;

app.use(cors({ origin: URL }));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my API Bayo");
});

const productController = require("./product/product.controller");

app.use("/products", productController);

app.listen(PORT, () => {
  console.log("Express API running in port: " + PORT);
});
