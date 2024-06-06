const express=require("express");
const router=express.Router();
const courses=require("../controllers/course-controller")


router.route('/course').get(courses);

module.exports=router;



