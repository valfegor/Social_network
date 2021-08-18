const express = require('express');

const cors = require('cors');

require('dotenv').config();


const app = express();

const {bdConnection} = require('./bd/bd');
const Role = require('./routes/rolroutes');
const User = require('./routes/userroutes');
const Auth = require('./routes/authroutes');
app.use(cors());

app.use(express.json());

app.use("/api/role",Role);
app.use("/api/user",User);
app.use("/api/log",Auth)


app.listen(process.env.PORT,()=>console.log("Backend Server Running  Ok On Port",process.env.PORT))


bdConnection();
