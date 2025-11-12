const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path:"./config.env"});

const cors = require('cors'); 
app.use(cors());
app.use(express.json());
const homeroute = require('./Route/router1');
app.use('/api',homeroute);
const loginn = require('./Route/userrouter');
app.use('/api',loginn);


app.get("/",(req,res)=>{
    res.send("Hi from backend");
})
port = process.env.PORT;
app.listen(port,()=>{
    console.log(`ur current running port is ${port}`);
})
