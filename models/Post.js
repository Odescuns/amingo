const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({

    message: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = Post = mongoose.model('post', PostSchema);