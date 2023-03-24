const Product = require('../Modules/Product.modules');

module.exports.postProduct = async(req,res,next)=>{
    try{
        res.send("API hit successfully");
    }catch(error){
        res.status(400).json({
            status:"Fail",
            message:"Fail to insert Product"
        })
    }
}