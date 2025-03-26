const express = require('express');
const router = express.Router();

const productController = require('../Controllers/ProductController');


router.route('/')
    .get(productController.getAllProducts)
    .post(productController.addNewProduct)

router.route('/:productId')
    .get(productController.getSingleProduct)
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct)


module.exports = router;

