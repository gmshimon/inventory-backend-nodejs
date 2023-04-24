const jwt = require('jsonwebtoken');


module.exports.generateToken = (userInfo)=>{
    const playLoad = {
        email:userInfo.email,
        role:userInfo.role
    }

    const token = jwt.sign(playLoad, process.env.TOKEN_SECRET,{
        expiresIn:'20'
    });

    return token;
}