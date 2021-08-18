const express = require('express');

const cors = require('cors');

require('dotenv').config();


const app = express();

const {bdConnection} = require('./bd/bd');

app.use(cors());

app.use(express.json());


app.listen(process.env.PORT,()=>console.log("Backend Server Running  Ok On Port",process.env.PORT))


bdConnection();
