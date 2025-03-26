const express = require('express');
const router = express.Router();

const CustomerController = require('../Controllers/CustomerController');


// Register a new customer
router.route('/register')
    .post(CustomerController.register_customer)

// Customer Login
router.route('/login')
    .post(CustomerController.login_customer)

// Get authenticated user profile (requires token)
router.route('/show')
    .get(CustomerController.display_customer_profile)

// Update customer profile (requires token)
router.route('/:customerId')
    .patch(CustomerController.update_customer_profile)

module.exports= router;