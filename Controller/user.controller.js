const User = require('../Modules/User.modules');

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
         const result = await User.find({}).select('-password');
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