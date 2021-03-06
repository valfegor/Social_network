const User = require('../models/userSchema');

const Post = require('../models/PostSchema');


const publish = async(req,res) =>{
    if(!req.body.text || !req.body.hash || !req.body.user) return res.status(400).send("You have to post the hashtag and the text please checkout");
    
    
    const user = await User.findOne({name:req.body.user});

    if(!user) return res.status(400).send("Sorry that user dont existe please register an account and use your credentials");

    const post = new Post({
        text: req.body.text,
        hash: req.body.hash,
        User_id:user._id,
        status:"posted",
    })

    let result = await post.save();

    if(!result) return res.status(400).send("Sorry cant save your post");

    return res.status(200).send({result});
}


const listpublished = async (req,res) =>{
    let post = await Post.find({text: new RegExp(req.params["text"],"i")}).populate("User_id").exec();
    
  
    if(!post || post==0) return res.status(400).send("Sorry no post created ");

    return res.status(200).send({post});
}


module.exports = {publish,listpublished};