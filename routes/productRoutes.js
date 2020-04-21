const express=require('express')
const productController=require('../controllers/productsController')
let router=express.Router()

router.route('/prods').get(productController.view)
                    .post(productController.create)
                    .delete(productController.destroy)

router.route('/prods/:id').put(productController.update)
module.exports=router
