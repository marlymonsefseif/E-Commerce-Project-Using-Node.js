const mongoose = require('mongoose');

//create schema
const reviewSchema = new mongoose.Schema({
    productId: {
        type: "ObjectId",
        required: true
    },
    customerId: {
        type: "ObjectId",
        required: true
    },
    rating: {
        type: "Number",
        required: true
    },
    review_text: {
        type: "String",
        required: true
    },
    updatedAt: Date
});

reviewSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
})


module.exports = mongoose.model("Review", reviewSchema);