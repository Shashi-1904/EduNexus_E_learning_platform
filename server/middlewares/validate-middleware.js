


//Middleware for parsing a registeration forms using zod validator schema
const validate=(schema)=> async(req,res,next)=>{
    try {
        const parseBody= await schema.parseAsync(req.body);
        req.body=parseBody;
        next();
    } catch (err) {
        //extracting error message from errors array returned by zod
        const extraDetails= err.errors[0].message;
        const message="Fill the input properly";
        const status=422;
        const error ={
            status,
            message,
            extraDetails
        }
        // res.status(400).json({msg: message})
        next(error);
        
    }
}

module.exports=validate;
