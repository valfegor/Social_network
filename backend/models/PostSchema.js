const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user_name:String,
    text:String,
    hash:String,
    status:String,
    date:{type:Date,default:Date.now},
    User_id:{ type: mongoose.Schema.ObjectId, ref: "user" }
});


const post = mongoose.model('post', postSchema);

module.exports = post;

