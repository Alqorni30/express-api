
const prisma = require("../db");


const findCategories = async () => {
    const kategori = await prisma.kategori.findMany();
  
    return kategori;
  };
  
  const findcategoryById = async (id) => {
    const kategori = await prisma.kategori.findUnique({
      where: {
        id,
      },
    });
  
    return kategori;
  };
  module.exports = {
    findCategories,
    findcategoryById,
  };