const User = require('../models/userSchema');

const Role = require('../models/role');

const bcrypt = require('bcrypt');

const registerUser = async (req,res) =>{

    if(!req.body.name || !req.body.email || req.body.password) return res.status(400).send("Please check all te camps");
    
    const existingEmail = User.findOne({email:req.body.email});

    if(existingEmail) return res.status(400).send("Sorry That email its already registered");


    const hash = await bcrypt.hash(req.body.password,10);

    const role = await Role.findOne({name:"user"});

    if(!role) return res.status(400).send("")

}