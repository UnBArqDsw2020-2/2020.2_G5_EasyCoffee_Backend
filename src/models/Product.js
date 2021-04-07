const mongoose = require('../database');

const ProductSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
    unique: true
  },
  descricao: {
      type: String,
      required: true
  },
  categoria: {
      type: String,
      required: true
  },
  preco: {
      type: Number,
      required: true
  },
  precoEmPromocao: {
      type: Number,
      required: false,
      default: 0.0
  },
  quantidade: {
      type: Number,
      required: true
  },
  emPromocao: {
      type: Boolean,
      required: false,
      default: false

  },
  avaliacao: {
      type: Number,
      required: false,
      default: 0
  },
  quantidadeDeAvaliacoes: {
      type: Number,
      required: false,
      default: 0
  }
});

module.exports = mongoose.model('product', ProductSchema);