const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const StockSchema = mongoose.Schema({
    ProductId:{
        type:ObjectId,
        required:true,
        ref:'Product'
    },
    name: {
      type: String,
      required: [true, "Please provide a name for this product"],
      // unique: [true, "Please provide unique name"],
      trim: true,
      lowercase: true,
      minLength: [3, "Name must be at least 3 characters"],
      maxLength: [100, "Name is too large"],
    },
    description: {
      type: String,
      required: true,
    },
    imageURLs: [
      {
        type: String,
        required: true,
        validate: [validator.isURL,"Please provide a valid image url"]
      },
    ],
    price:{
        type:Number,
        required:true,
        min:[0,"Product price cant be negative"]
    },
    quantity:{
        type:Number,
        required:true,
        min:[0,"Product quantity cant be negative"]
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pcs", "bag"],
        message: "unit can't be {VALUE}, must be kg/litre/pcs/bag",
      },
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "Brand",
        required: true,
      },
    },
    store:{
        name: {
            type: String,
            required: [true, "Please provide a name for this product"],
            // unique: [true, "Please provide unique name"],
            trim: true,
            lowercase: true,
            enum:{
                values:["dhaka","chattogram","rajshahi","sylhet","khulna","barishal","rangpur","mymensingh"],
                message:"{VALUE} is not a valid name"
            }
        },
        id:{
            type:ObjectId,
            ref:"Store",
            required:true
        }
    },
    supplier:{
        name: {
            type: String,
            required: [true, "Please provide a name for this product"],
            // unique: [true, "Please provide unique name"],
            trim: true,
            lowercase: true,
        },
        id:{
            type:ObjectId,
            ref:"Supplier",
            required:true
        }
    },
    status:{
        type:String,
        required:true,
        enum:{
            values:["in-stock","out-of-stock","discontinued"],
            message:"status cane't be  {VALUE}"
        }
    },
    sellCount:{
      type:Number,
      default:0,
      min:0
    }
  },{
    timestamps: true,
  });

const Stock = mongoose.model("Stock", StockSchema);

module.exports = Stock;
