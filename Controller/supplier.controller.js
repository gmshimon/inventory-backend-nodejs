module.exports.postSupplier = async(req,res,next)=>{
    try {
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