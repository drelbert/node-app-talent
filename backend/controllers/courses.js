const Course = require('../models/course');

//Still a normal middleware product
exports.postCourse = (req, res, next) => {
    const course = new Course(req.body.title);
    course.save();
    res.redirect('/api/courses');
    //console.log(course);
    //res.status(201).json({
      //message: 'Course Added!'
    //});
  }


exports.getCourses = (req, res, next) => {
    Course.fetchAll(courses => {
        res.status(200).json({
            message: 'Course Added!',
            courses: courses
       });
    // const courses = [
    //   {id: 'thth', title: 'Leadership 1000', description: 'Desct ToDo', courseCode: 'Rggt44', date: 'Nov 3'},
    //   {id: 'thth', title: 'Lead Mentor Lead 201', description: 'Desct Done', courseCode: 'Rggt44', date: 'Nov 3'}
    // ];
    });
  }