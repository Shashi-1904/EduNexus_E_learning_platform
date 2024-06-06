// Middleware to check user is admin or not

const adminMiddleware=async(req,res,next)=>{
    try {
        // If admin the give access
        const adminRole= req.user.isAdmin;
        if(!adminRole)
            {
                return res.status(403).json({message:"Acces denied. User is not admin."})
            };
            next();
    } catch (error) {
        next(error);
    }


}

module.exports=adminMiddleware;
