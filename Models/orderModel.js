const mongoose = require('mongoose');

//create schema
const orderSchema = new mongoose.Schema({
    customerId:{
        type: "ObjectId",
        required: true,
        ref: "Customer"
    },
    products: {
        type: "Array",
        required : true
    },
    total_price: {
        type: "Number",
        required: true
    },
    updatedAt: Date
});

orderSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
})


module.exports = mongoose.model("Order", orderSchema);