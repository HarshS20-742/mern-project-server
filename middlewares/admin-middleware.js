const adminMiddleware = async(req,res,next) =>{
    try {
        // console.log('userrrrr',req.user);
        const adminRole = req.user.isAdmin;
        if(!adminRole){
            return res.status(403).json({msg: 'Access denied, you are not an admin'});
        }
    //    return res.status(200).json({msg:req.user.isAdmin});
    next();

    } catch (error) {
        next(error);
        
    }
}
module.exports = adminMiddleware;