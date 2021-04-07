const { create } = require("../models/Product");
const Product = require("../models/Product");
const db = require('../database');

const productController = {
  // Creat
  async create(req, res) {
    const product = req.body
    try {
      const newProduct = await Product.create(product);
      return res.send({newProduct});
    } catch (err) {
      return res.status(400).send({err:'Não foi possível cadastrar o produto!'})
    }
  },

  // Read (one product)
  async read(req, res) {
    const id = req.body
    try {
      const product = await Product.findById(id);
      return res.send({product})
    } catch(err) {
      return res.status(400).send({err:'Não foi possível encontrar o produto!'})
    }
  },

  // Read all
  async readAll(req, res) {
    try {
      const products = db.collection("products").find().toArray
      return res.send({products})
    } catch(err) {
      return res.status(400).send({err:'Não foi possível encontrar os produtos!'})
    }
  }

  // Edit

  // Delete
};

module.exports = productController;