const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//create schema
const customerSchema = new mongoose.Schema({
    name: {
        type: "String",
        required: true
    },
    email: {
        type: "String",
        required: true
    },
    address: {
        type: "String",
        required: true
    },
    password: {
        type: "String",
        required: true,
    },
    isAdmin: {
       type: "Boolean",
       defaultValue : false 
    },
    updatedAt: Date
});

customerSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
})

customerSchema.pre('save',async function (next) {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next()
    } catch(error) {
        next(error)
    }
})

module.exports = mongoose.model("Customer", customerSchema);