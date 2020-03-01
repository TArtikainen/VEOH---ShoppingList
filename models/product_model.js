const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const product_schema = new Schema({
    name: {
        type: String,
        req: true
    },
    quantity: {
        type: Number,
        req: true
    },
    image_url: {
        type: String,
        req: false
    }
});
const product_model = mongoose.model('ProductToMongo', product_schema);

module.exports = product_model;