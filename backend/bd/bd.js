const mongoose = require('mongoose');

const bdConnection = async () =>{
    try {
        await mongoose.connect(process.env.BD_CONNECTION,{
            useNewUrlParser:true,
            useFindAndModify:false,
            useCreateIndex:true,
            useUnifiedTopology:true
        })

        console.log('Connect To mongo DB successfully')
    } catch (e) {
        console.log('sorry cant connect to your DB' ,e);
        throw new Error('Sorry please try again');
    }
}

module.exports = {bdConnection}