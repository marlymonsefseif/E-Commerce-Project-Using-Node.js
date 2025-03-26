const express = require('express');
const app = express();
const cors = require('cors')

//Routers
const productRouter = require('./Routs/productRouts');
const orderRouter = require('./Routs/orderRouts');
const reviewRouter = require('./Routs/reviewRouts');
const customerRouter = require('./Routs/customerRouts');

app.use(express.static("views"))
app.use(express.json());
app.use(cors())

app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/customers',customerRouter);

module.exports = app;

