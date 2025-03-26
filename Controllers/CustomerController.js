const Customer = require('../Models/customerModel');
const emailValidator = require('email-validator');

// Register a new customer
const register_customer = async (req, res) => {
  const { name, email, password, address } = req.body;

  // Check for existing email
  let existingCustomer = await Customer.findOne({ email });
  if (existingCustomer){
    return res.status(400).json({ message: 'Email already exists' });
  }
  if(!emailValidator.validate(email)){
    return res.status(400).json({message:"email is invalid"});
  }

  const newCustomer = new Customer({ name, email, password, address });
  try {
    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer); // Return customer data without password
  } catch(error) {
    res.status(400).json({ message: error.message }); // Handle validation errors
  }
};

// Customer Login
const login_customer = async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  let customer = await Customer.findOne({ email });
  if (!customer) return res.status(401).json({ message: 'Invalid email or password' });

  // Compare password
  if (password !== customer.password) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  res.json({ message: 'Login successful',
  isAdmin: Customer.isAdmin});
};

// Get authenticated user profile
const display_customer_profile = async (req, res) => {
  let customers = await Customer.find();
  res.json(customers);
};

// Update customer profile
const update_customer_profile = async (req, res) => {
  const id = req.params.customerId;

  if (!req.body.name) {
      return res.status(400).json({ message: "name is required" });
  }
  if (!req.body.address) {
      return res.status(400).json({ message: "address cannot be empty" });
  }
  if (!req.body.email) {
      return res.status(400).json({ message: "email is required" });
  }
  if (!req.body.password) {
    return res.status(400).json({ message: "password is required" });
  }

  let customer = await Customer.findByIdAndUpdate(id, req.body, { new: true })
  res.json(customer);
};

module.exports = {
    register_customer,
    login_customer,
    display_customer_profile,    
    update_customer_profile
}
