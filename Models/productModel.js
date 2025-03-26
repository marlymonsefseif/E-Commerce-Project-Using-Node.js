const mongoose = require('mongoose');

//create schema
const productSchema = new mongoose.Schema({
    name: {
        type: "String",
        required: true
    },
    description: {
        type: "String",
        required: true
    },
    price: {
        type: "Number",
        required: true
    },
    category: {
        type: "String",
        required: true
    },
    stock_quantity: {
        type: "Number",
        required: true
    },
    image_url:{
        type: "String",
        required: true
    },
    updatedAt: Date
});

productSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
})


module.exports = mongoose.model("Product", productSchema);