const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin@mongo:27017/easydb?authSource=admin', { useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  mongoose.Promise=global.Promise;
  module.exports=mongoose;