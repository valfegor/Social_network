const bcrypt = require("bcrypt");

const User = require('../models/userSchema');


const Log = async (req,res) =>{
    let user = await User.findOne({email:req.body.email});

    if(!user) return res.status(400).send("Sorry please check your password or email");

    //comparacion de contraseña en la bd.

    let hash = bcrypt.compare(req.body.password , user.password);

    if(!hash) return res.status(400).send("Sorry please check your password or email");



    try {
    let jwt = user.generateJWT();
    return res.status(200).send({jwt});
    } catch (e) {
        return res.status(400).send("Try to log again please");
    }
}


module.exports = {Log}