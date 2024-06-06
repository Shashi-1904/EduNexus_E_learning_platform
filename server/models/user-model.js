const mongoose= require("mongoose");
const bcrypt =require("bcryptjs")
const jwt=require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,

    },
    email:{
        type: String,
        require: true,

    },
    phone:{
        type: String,
        require: true,

    },
    passward:{
        type: String,
        require: true,

    },
    isAdmin:{
        type: Boolean,
        default: false,

    }
});

//Middleware function for securing passward before saving 
userSchema.pre('save',async function(){

    const user=this;
    if(!user.isModified("passward")){
        next();
    }
    try {
        const saltround=await bcrypt.genSalt(10);
        const hash_passward = await bcrypt.hash(user.passward,saltround);
        user.passward=hash_passward

        
    } catch (error) {
        next(error);
        
    }

});

//json web token genration

userSchema.methods.generateToken=async function(){
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email:this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:"30d"
        }

    )
    } catch (error) {
        console.log(error);        
    }
}


//compare passward
userSchema.methods.comparePassward=async function(passward){
    return bcrypt.compare(passward,this.passward)
}

//create collection
const User=new mongoose.model("User",userSchema );

module.exports = User;