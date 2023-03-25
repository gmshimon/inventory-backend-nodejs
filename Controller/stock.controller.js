const Stock = require('../Modules/Stock.modules');

module.exports.postStock = async(req,res,next)=>{
    try {
        const result = await Stock.create(req.body);
        res.status(200).json({
            status:"Success",
            message:"Data inserted successfully",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:error.message
        })
    }
}

module.exports.getStock = async(req,res,next)=>{
    try {
        const result = await Stock.find({})
        res.status(200).json({
            status:"success",
            message:"Data fetched successfully",
            data:result
        })
    } catch (error) {
        res.status(400).json({

        })
    }
}