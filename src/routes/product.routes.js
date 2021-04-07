const express = require('express');
const productController = require('../controllers/productController');
const product = require('../controllers/productController')
const router = express.Router();

router.post('/create', productController.create);
router.get('/read', productController.read);
router.get('', productController.readAll);

module.exports = app =>app.use('/product', router);