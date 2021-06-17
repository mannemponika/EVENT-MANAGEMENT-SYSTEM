const mongoose2=require('mongoose');
const adminsignup=new mongoose2.Schema(
    {
        id:{
            type:String,
            required:true
        },
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

module.exports = mongoose2.model('adminsignupdetails',adminsignup);