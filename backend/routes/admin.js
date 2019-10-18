const express = require('express');

const router = express.Router();

router.post('', (req, res, next) => {
  const course = req.body;
  console.log(course);
  res.status(201).json({
    message: 'Course Added!'
  });
});

router.get('', (req, res, next) => {
  const courses = [
    {id: 'thth', title: 'Course One', description: 'Desct ToDo', courseCode: 'Rggt44', date: 'Nov 3'},
    {id: 'thth', title: 'Course Tweooo', description: 'Desct Done', courseCode: 'Rggt44', date: 'Nov 3'}
  ];
  res.status(200).json({
    message: 'Course Added!',
    courses: courses
  });
});

module.exports = router;
