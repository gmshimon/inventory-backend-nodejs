const User = require('../Modules/User.modules');
const bcrypt = require("bcrypt");
const { generateToken } = require('../utilis/token');
module.exports.postUser = async(req,res,next)=>{
    try {
        const result = await User.create(req.body);

        res.status(200).json({
            status:"success",
            message:"User inserted Successfully",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:"Failed to insert User",
            error:error.message
        })
    }
}

module.exports.getAllUsers = async(req,res,next)=>{
    try {
         const result = await User.find({})
        //.select('-password');
        res.status(200).json({
            status:"success",
            message:"User fetched Successfully",
            data:result
        }) 
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:"Failed to fetch User",
            error:error.message
        })
    }
}

/* 
    1. Check if Email and password are given
    2. Load user with email
    3. If not user send res
    4. compare password
    5. if password not correct send res
    6. check if user is active 
    7. if not active send res
    8. generate token
    9. send user and token
*/
module.exports.loginUser = async(req,res,next)=>{
    try {
        const {email,pass} = req.body;
        if(!email||!pass){
            return res.status(403).json({
                status:"Fail",
                message:"Please provide credentials"
            })
        }

        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({
                status:"Fail",
                message:"No user with this email"
            })
        }

        const isPasswordValid = bcrypt.compareSync(pass,user.password);
        if(!isPasswordValid){
            return res.status(403).json({
                status:"Fail",
                message:"Wrong password"
            })
        }
        if(user.status!="active"){
            return res.status(404).json({
                status:"Fail",
                message:"User is not active"
            })
        }

        const token = generateToken(user);

       const {password,...others} = user.toObject()
        res.status(200).json({
            status:"Success",
            message:"Login successful",
            data:others,
            token:token
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:"Failed to login",
            error:error.message
        })
    }
}