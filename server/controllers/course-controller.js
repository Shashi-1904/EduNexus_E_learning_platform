const Course=require("../models/course-model")

const course=async(req,res)=>{
    try {
        const response=await Course.find();
        if(!response){
            res.status(404).json({message:"No Couses found"})
        }
        res.status(200).json({message:response})

    } catch (error) {
        return res.status(500).json({message:"Backend Error"});

    }
};

module.exports=course;
