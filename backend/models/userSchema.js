const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    Status:Boolean,
    date:{type:Date,default:Date.now},
    roleId: { type: mongoose.Schema.ObjectId, ref: "role" },
});


userSchema.methods.generateJWT = function (){
    return jwt.sign({
        _id:this._id,
        name:this.name,
        iat:moment().unix(),
    },process.env.SECRET_KEY_JWT
    );
};

const user = mongoose.model('user', userSchema);


module.exports = user;