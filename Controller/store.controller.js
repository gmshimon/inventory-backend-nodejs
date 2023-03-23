module.exports.postStore = async(req,res,next)=>{
    try {
        res.send("Api hit successfully")
    } catch (error) {
        res.status(400).json({
            status:'Fail',
            message:"Couldn't insert store data"
        })
    }
}