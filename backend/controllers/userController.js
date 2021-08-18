const User = require('../models/userSchema');

const Role = require('../models/userSchema');

const bcrypt = require('bcrypt');

const registerUser = async (req,res) =>{

    if(!req.body.name || !req.body.email || req.body.password) return res.status(400).send("Please check all te camps");
    
    const existingEmail = User.findOne({email:req.body.email});

    if(existingEmail) return res.status(400).send("Sorry That email its already registered");


    const hash = await bcrypt.hash(req.body.password,10);

    const role = await Role.findOne({name:"user"});

    if(!role) return res.status(400).send("Sorry Dont have role asigned");

    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:hash,
        roleId:role._id,
        Status:true,
    })

    const result = user.save();

    if(!result) return res.status(400).send("Sorry Try again");

    try {
        let jwt = user.generateJWT();
        return res.status(20).send({jwt});
    } catch (e) {
        return res.send("Sorry please try again");
    }

}


const listUsers = async (req,res) =>{
    let user = await User.find({name: new RegExp(req.params["name"],"i")}).populate("roleId").exec();
    if(!user || user==0) return res.status(400).send("Sorry no user registered yet be the first one =)");

    return res.status(200).send({user});
}

module.exports = {registerUser, listUsers}


