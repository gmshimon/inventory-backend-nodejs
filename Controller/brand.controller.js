const Brand = require('../Modules/Brand.modules')

module.exports.postBrand = async(req,res,next)=>{
    try {
        const result = await Brand.create(req.body);

        res.status(200).json({
            status:"Success",
            message:"Data inserted successfully"
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            error:"Couldn't create the brand"
        })
    }
}

module.exports.getBrand = async(req,res,next)=>{
    try {
        const result = await Brand.find({})
        res.status(200).json({
            status:"success",
            message:"Data fetched successfully",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            error:"Can't fetch the brand"
        })
    }
}

module.exports.getBrandDetails = async(req,res,next)=>{
    try {
        const {id} = req.params
        const result = await Brand.findById(id);
        res.status(200).json({
            status:"success",
            message:"Data fetched successfully",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            error:"Can't fetch the brand by id"
        })
    }
}