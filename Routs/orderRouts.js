const express = require('express');
const router = express.Router();

const orderController = require('../Controllers/OrderController');


router.route('/')
    .get(orderController.getAllorder)
    .post(orderController.addNewOrder)

router.route('/:orderId')
    .get(orderController.getSingleOrder)
    .patch(orderController.updateOrder)
    .delete(orderController.deleteOrder)


module.exports = router;


