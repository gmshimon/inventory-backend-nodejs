const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    email:{
        type:String,
        validate:[validator.isEmail,"Please provide a valid email"],
        required:[true,'Email address is required'],
        lowercase:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:[true,"Please provide password"],
        validate:{
            validator:(value)=>{
                validator.isStrongPassword(value,{
                    minLength:6,
                    minLowercase:3,
                    minNumber:1,
                    nimUppercase:1,
                    minSymbol:1,
                })
            },
            message:"Password {VALUE} is not strong",
        }
    },
    confirmPassword:{
        type:String,
        required:[true,"Please confirm your password"],
        validate:{
            validator:value=>{
                return value===this.password;
            },
            message:"Password doesn't match"
        }
    },

    role:{
        type:String,
        enum:["Buyer","Store-manager","Admin"],
        default:"Buyer"
    },

    firstName:{
        type:String,
        required:[true,"Please provide a first name"],
        trim:true,
    },
    lastName:{
        type:String,
        required:[true,"Please provide a last name"],
        trim:true
    },
    contactNumber:{
        type:String,
        validate:[validator.isMobilePhone, "Please provide a valid contact number"]
    },

    shippingAddress:String,

    imgURL:{
        type:String,
        validate:[validator.isURL,"Please provide a valid url"]
    },
    status:{
        type:String,
        default:"inactive",
        enum:["inactive","active","blocked"]
    },

    confirmationToken: String,
    confirmationTokenExpires: Date,

    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
},{
    timestamps: true,
})

userSchema.pre("save",(next)=>{
    const password = this.password;
    const hashPassword = bcrypt.hashSync(password);

    this.password = hashPassword;
    this.confirmPassword = null;

    next();
})


const User = mongoose.model("User",userSchema);


module.exports = User;