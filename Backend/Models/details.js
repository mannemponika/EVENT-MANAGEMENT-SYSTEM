const mongoose=require('mongoose');
const detail=new mongoose.Schema(
    {
        address:{
            type: String,
            require: true
        },
        age: {
            type: Number,
            require: true
        },
        age_group: {
            type: String,
            require: true
        },
        cake_type: {
            type: String,
            required: true
        },
        cake_quantity:{
           type:Number,
           required:true
        },
        dateofarrangement:{
            type:Date,
            required:true
         },
         decoration_type:{
            type:String,
            required:true
         },
         email:{
             type:String,
             required:true
         },
         gender:{
             type:String,
             required:true
         },
         name:{
             type:String,
             required:true
         },
         no_of_attendees:{
             type:Number,
             required:true
         },
         phone:{
             type:Number,
             required:true
         },
         special_arrangements:{
             type:String,
             required:true
         }
    }
);

module.exports = mongoose.model('order',detail);