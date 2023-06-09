const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const brandSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide a brand name"],
        trim:true,
        lowerCase:true,
        unique:true,
        maxLength:100
    },
    description:String,
    email:{
        type:String,
        lowerCase:true,
        validate:[validator.isEmail,"Please provide a valid email"]
    },
    website:{
        type:String,
        validate:[validator.isURL,"Please provide a valid URL"]
    },
    location:String,

    products:[{
        type:ObjectId,
        ref:"Products"
    }],
    suppliers:[{
        name:String,
        contactNumber:String,
        id:{
            type:ObjectId,
            ref:"Supplier"
        }
    }],
    status:{
        type:String,
        enum:["active","in-active"],
        default:"active"
    }
},{
    timestamps:true
})

const Brand = mongoose.model("Brand",brandSchema)

module.exports = Brand