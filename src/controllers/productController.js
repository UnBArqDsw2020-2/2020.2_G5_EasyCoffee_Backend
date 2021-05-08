const { create } = require("../models/Product");
const Product = require("../models/Product");


const productController = {
  // Create
  async create(req, res) {
    const product = req.body;
    try {
      const newProduct = await Product.create(product);
      return res.json({newProduct});
    } catch (err) {
      return res.status(400).json({err:'Não foi possível cadastrar o produto!'});
    }
  },

  // Read (one product)
  async read(req, res) {
    const id = req.params.id;
    try {
      const product = await Product.findById(id);
      return res.status(200).json(product);
    } catch(err) {
      return res.status(400).json({err:'Não foi possível encontrar o produto!'});
    }
  },

  // Read all
  async readAll(req, res) {
    try {
      const products = await Product.find();
      return res.status(200).json(products);
    } catch(err) {
      return res.status(400).json({err:'Não foi possível encontrar os produtos!'});
    }
  },

  // update
  async update(req, res) {
    const id = req.params.id;
    const product = req.body;
    try {
      await Product.findByIdAndUpdate(id,product);
      return res.json({msg:'Produto atualizado com sucesso!'});
    } catch (err) {
      return res.status(400).json({err:'Não foi possível atualizar o produto!'});
    }
  },

  // Delete
  async delete(req, res) {
    const id = req.params.id;
    try {
      await Product.findByIdAndDelete(id);
      return res.json({msg:'Produto deletado com sucesso!'});
    } catch (err) {
      return res.status(400).json({err:'Não foi possível deletar o produto!'});
    }
  },
};

module.exports = productController;