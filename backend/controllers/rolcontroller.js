const Role = require('../models/rolSchema');

//registrando el rol del usuario.

const registerRole = async (req,res) => {
    if(!req.body.name  || !req.body.description) return res.status(400).send("Sorry please check all the camps");

    const existingRole = await Role.findOne({name:req.body.name});

    if(existingRole) return res.status(400).send("The role its already Created");

    const role = new Role({
        name: req.body.name,
        description:req.body.description,
        Status:true,
    })

    const result = await role.save();

    if(!role) return res.status(400).send("Sorry please try again.");

    return res.status(201).send({result});
}
