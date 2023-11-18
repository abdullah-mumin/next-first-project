import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();

//call controller function
router.post('/create-student', studentController.createStudent);

router.get('/', studentController.getAllStudents);

router.get('/:studentId', studentController.getStudentByID);

export const studentRoutes = router;
