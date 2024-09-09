const prisma = require("../db");

const {
    findcategoryById,
    findCategories
} = require("./category.repo");

const getAllKategori= async () => {
  const kategori = await findCategories();
  
  return kategori;
};

const getKategoriById = async (id) => {
  const kategori = await findcategoryById(id);

  if (!kategori) {
    throw Error("kategori not found");
  }

  return kategori;
};

module.exports = {
  getAllKategori,
  getKategoriById,
};
