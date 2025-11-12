const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path:'../Config.env'});

const link = process.env.DATABASE;

mongoose.connect(link,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{console.log("connected succesfully")})
.catch((error)=>{console.log(error)});

module.exports = mongoose;

