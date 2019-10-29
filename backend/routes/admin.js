const express = require('express');

const coursesController = require('../controllers/courses');

const router = express.Router();

//Middleware function in the controllers/courses
router.post('', coursesController.postCourse);

router.get('', coursesController.getCourses);

//router.get('/:courseId', coursesController.getEditCourse)

module.exports = router;

