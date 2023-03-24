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

module.exports.getProducts = async(req,res,next)=>{
    try {
        const result = await Product.find({});

        res.status(200).json({
            status:"Success",
            message:"Data successfully fetched",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:"Fail to insert Product"
        })
    }
}