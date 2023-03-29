const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide a name for this product"],
        unique:[true,"Please provide unique name"],
        trim:true,
        lowercase:true,
        minLength:[3,"Name must be at least 3 characters"],
        maxLength:[100,"Name is too large"]
    },
    description:{
        type:String,
        required:true
    },
    imageURLs:[{
        type:String,
        required:true,
    }],
    unit:{
        type:String,
        required:true,
        enum:{
            values:["kg","litre","pcs","bag"],
            message:"unit can't be {VALUE}, must be kg/litre/pcs/bag"
        }
    },
    category:{
        type:String,
        required:true
    },
    brand:{
        name:{
            type:String,
            required:true
        },
        id:{
            type:ObjectId,
            ref:"Brand",
            required:true
        }
    }
}, {
    timestamps: true,
})

const Products = mongoose.model("Products",ProductSchema)

module.exports = Products;