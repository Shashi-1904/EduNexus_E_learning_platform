const {z}=require("zod");

//creating object schema
const loginSchema = z.object({
    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be at least of 3 chars."})
    .max(255,{message:"Email must not be more than 255 characters."}),

    passward: z
    .string({required_error:"Name is required"})
    .min(7,{message:"Passward must be at least of 7 chars."})
    .max(1024,{message:"Passward must not be more than 1024 characters."}),


})

const signupSchema = loginSchema.extend({
    username: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be at least of 3 chars."})
    .max(255,{message:"Name must not be more than 255 characters."}),

    
    phone: z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10,{message:"Phone number must be at least of 10 chars."})
    .max(20,{message:"Phone number must not be more than 20 characters."}),

   

})


module.exports={signupSchema,loginSchema};