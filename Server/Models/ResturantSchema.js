const mongoose = require("mongoose");


const ResturantSchema = new mongoose.Schema({
        resturant_name:{
            type:"String",
            required:true
        },  
        owner_name:{
            type:"String",
            required:true
        },
        address:{
            type:"String",
            required:true
        },
        phone_number:{
            type:"Number",
            required:true
        },
        tags:["String"],
})

