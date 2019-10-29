const mongoose = require('mongoose');


const courseSchema = mongoose.Schema({
  title: { type: String, required: true },
  courseId: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true }
  
});

// Turn schema into model here 
module.exports = mongoose.model('Course', courseSchema);

    

