const mongoose = require('../database');

const ProductSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true
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
      required: false
  },
  quantidade: {
      type: Number,
      required: true
  },
  emPromocao: {
      type: Boolean,
      required: false
  },
  avaliacao: {
      type: Number,
      required: false
  },
  quantidadeDeAvaliacoes: {
      type: Number,
      required: false
  }
});

module.exports = mongoose.model('product', ProductSchema);