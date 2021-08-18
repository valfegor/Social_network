const User = require('../models/userSchema');

const Role = require('../models/role');

const bcrypt = require('bcrypt');

const registerUser = async (req,res) =>{

    if(!req.body.name || !req.body.email || req.body.password) return res.status(400).send("Please check all te camps");
    
    const existingEmail = 

}