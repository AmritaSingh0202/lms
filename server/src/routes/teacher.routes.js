import express from 'express';
import { upload } from '../middlewares/multer.middleware.js';

import { getTeacherCourses, getTeacherProfile, teacherDelete, teacherUpdate } from '../controller/version1/teacher.controller.js';

import isTeacherLogin from '../middlewares/teacher.auth.js';

const teacherRouter = express.Router();




teacherRouter.route('/update').patch(
    isTeacherLogin,
    upload.none(),
    teacherUpdate
);


teacherRouter.route('/getMyCourses').get(
    isTeacherLogin,
    getTeacherCourses
)



teacherRouter.route('/getProfile').get(
    isTeacherLogin,
    getTeacherProfile
)



teacherRouter.route('/delete').post(
    
    
    teacherDelete
);





export default teacherRouter;