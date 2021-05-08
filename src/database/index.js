const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin@mongo:27017/easydb?authSource=admin', { useUnifiedTopology: true,useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log("Não foi possivel conectar",err));

  mongoose.Promise=global.Promise;
  module.exports=mongoose;