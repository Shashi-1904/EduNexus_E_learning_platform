const {Schema,model} =require("mongoose");

const courseSchema = new Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    instructor: { type: String, required: true },
    duration: { type: Number, required: true },
    level: { type: String, required: true },
    price: { type: Number, required: true },
  });

  const Course=new model('Course', courseSchema);

  module.exports = Course;
