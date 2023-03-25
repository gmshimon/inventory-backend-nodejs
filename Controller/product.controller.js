const Product = require('../Modules/Product.modules');
const Brand = require('../Modules/Brand.modules');

module.exports.postProduct = async(req,res,next)=>{
    try{
        const products = await Product.create(req.body);
        const {_id:productID,brand} = products;
        const result = await Brand.updateOne(
            {_id:brand.id},
            {$push:{products:productID}}
        )
        console.log(products)
        res.status(200).json({
            status:"success",
            message:"product inserted successfully",
            data:product
        })
    }catch(error){
        res.status(400).json({
            status:"Fail",
            message:error.message
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

module.exports.fileUpload = async(req,res,next)=>{
    try {
        res.status(200).json(req.file)
    } catch (error) {
        res.status(400).json({
            message:error
        })
    }
}