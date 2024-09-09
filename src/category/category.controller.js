const express = require("express");
const prisma = require("../db");

const {
    getAllKategori,
    getKategoriById
} = require("./category.service");

const router = express.Router();

router.get("/", async (req, res) => {
  const kategori = await getAllKategori();

  res.send(kategori);
});

router.get("/:id", async (req, res) => {
  try {
    const kategoriId = parseInt(req.params.id);
    const kategori = await getKategoriById(kategoriId);

    res.send(kategori);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;