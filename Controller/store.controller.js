const Store = require('../Modules/Store.modules')

module.exports.postStore = async(req,res,next)=>{
    try {
        const result = await Store.create(req.body)
        res.status(200).json({
            status:"Success",
            message:"Data inserted successfully",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:'Fail',
            message:"Couldn't insert store data"
        })
    }
}

module.exports.getStore = async(req,res,next)=>{
    try {
        const result = await Store.find({})
        res.status(200).json({
            status:"Success",
            message:"Data inserted successfully",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:'Fail',
            message:"Couldn't fetch data"
        }) 
    }
}

module.exports.getStoreDetails = async(req,res,next)=>{
    try {
       const {id} = req.params;
       const result = await Store.findById(id);

       res.status(200).json({
            status:"Success",
            message:"Data inserted successfully",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:'Fail',
            message:"Couldn't fetch data"
        }) 
    }
}