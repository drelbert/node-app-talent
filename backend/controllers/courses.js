const Course = require('../models/course');

//Still a normal middleware product
exports.postCourse = (req, res, next) => {
    const course = new Course({
      title: req.body.title, 
      courseId: req.body.courseId,
      description: req.body.description,
      date: req.body.date
    });
  course.save();
  res.status(201).json({
    message: 'Post Added!'
  });

exports.getCourses = (req, res, next) => {
  const Course = req.body;
    Course.find().then(documents => {
      console.log(documents);
    });
        res.status(200).json({
          message: 'Courses Fetched.',
          courses: courses
    });
  };
}

