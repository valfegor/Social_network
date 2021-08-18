const User = require('../models/userSchema');

const user = async (req,res,next) =>{
    const user = await User.findById(req.user._id);
    if(!user) return res.status(400).send("Authorization denied");

    next();
}

module.exports = user;