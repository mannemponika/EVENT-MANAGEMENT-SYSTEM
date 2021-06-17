const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/Business',{useNewUrlParser: true , useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open', () => console.log("connected to the mongodb"));

const app = express();

app.use(cors());
app.use(bodyParser.json());
const port = process.env.port || 4500;


const detail=require('./route/detailsRouter');
const Signup=require('./route/signuproute');
const adminSignup=require('./route/adminsignuproute');

app.use('/project',detail);
app.use('/signup',Signup);
app.use('/adminsignup',adminSignup);

app.listen(port, () => console.log(`running on the server ${port}`));