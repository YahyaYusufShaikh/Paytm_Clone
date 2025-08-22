const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/paytm');

const  useSchema = mongoose.Schema({
    username: String, 
    password: String,
    firstName : String,
    lastName: String,
})

const User = mongoose.model('User', useSchema);
module.exports={User}