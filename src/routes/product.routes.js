const express = require('express')
const router = express.Router();

const product = require('../controllers/productController')

router.get('/',(req,res)=>{
  res.send('we are on posts')
});

router.post('/product/post', product.registrarProduto ).then(() => {
    console.log("--------sucesso--------------")
})
.catch((e) => {
    console.log("--------erro--------------")   
});

router.get('/product',(req,res)=>{
  res.send('we are on products')
});


module.exports = app =>app.use(router);