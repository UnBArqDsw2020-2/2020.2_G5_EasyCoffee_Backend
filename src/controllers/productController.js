const db = require("../models/Product");

const Product = db.product;

class productController{
    //CRUD - Create, Read, Update, Delete

    async registrarProduto(req,res){ 
        try {
            console.log("-------------------------------------------------")
            const product = await Product.create(req.body);
            return res.send({product});
          } catch (err) {
            return res.status(400).send({err:'registration failed'})
          }
    } 
}

module.exports = productController;