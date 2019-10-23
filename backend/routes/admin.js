const express = require('express');

const router = express.Router();

const coursesController = require('../controllers/courses');

//Middleware function in the controllers/courses
router.post('', coursesController.postCourse);

router.get('', coursesController.getCourses);

module.exports = router;

