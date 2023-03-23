const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const StoreSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,"Please provide Store name"],
        lowercase:true,
        unique:true,
        enum: {
            values: ["dhaka", "chattogram", "rajshahi", "sylhet", "khulna", "barishal", "rangpur", "mymensingh"],
            message: "{VALUE} is not a valid name"
          }
    },
    description:String,
    status:{
        type:String,
        enum:["active","in-active"],
        default:"active"
    },
    manager: {
        name: String,
        contactNumber: String,
        id: {
          type: ObjectId,
          ref: 'User'
        }
    }
},{
    timestamps:true
})

const Store = mongoose.model("Store",StoreSchema);

module.exports = Store;