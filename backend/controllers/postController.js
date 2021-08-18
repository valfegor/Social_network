const User = require('../models/userSchema');

const Post = require('../models/PostSchema');


const publish = async(req,res) =>{
    if(!req.body.text || !req.body.hash || !req.body.user) return res.status(400).send("You have to post the hashtag and the text please checkout");
    
    
    const user = await User.findOne({name:req.body.user});

    console.log(user);
}


