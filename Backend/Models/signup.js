const mongoose1=require('mongoose');
const signup=new mongoose1.Schema(
    {
        name:{
            type: String,
            require: true
        },
        mobile: {
            type: Number,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose1.model('signupdetails',signup);