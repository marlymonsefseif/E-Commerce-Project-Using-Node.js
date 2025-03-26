const mongoose = require('mongoose');

// Connection URL
const url = 'mongodb://127.0.0.1:27017/online_shopping';

const connectDb = () => {
    mongoose.connect(url).then(() => {
        console.log('Connected successfully to server');
    });
}

module.exports = connectDb;