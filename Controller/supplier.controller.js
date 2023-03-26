const Brand = require('../Modules/Brand.modules')
const Supplier = require('../Modules/Supplier.modules')
module.exports.postSupplier = async(req,res,next)=>{
    try {
        const supplier = await Supplier.create(req.body)

        const {_id:supplierID,name,brand} = supplier

        const result = await Brand.updateOne({_id:brand.id},{
            $push:{suppliers:{name:name,id:supplierID}}
        })

        res.status(200).json({
            status:"Success",
            message:"data inserted successfully"
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:error.message
        })
    }
}

module.exports.getSupplier = async(req,res,next)=>{
    try {
        const result = await Supplier.find({})

        res.status(200).json({
            status:"Success",
            message:"Data fetched successfully",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:error.message
        })
    }
}