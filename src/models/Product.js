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
      type: Float,
      required: true
  },
  precoEmPromocao: {
      type: Float,
      required: false
  },
  quantidade: {
      type: Int,
      required: true
  },
  emPromocao: {
      type: Boolean,
      required: false
  },
  avaliacao: {
      type: Float,
      required: false
  },
  quantidadeDeAvaliacoes: {
      type: int,
      required: false
  }
});

module.exports = mongoose.model('product', ProductSchema);