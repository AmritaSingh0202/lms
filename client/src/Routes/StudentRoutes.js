import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import YourProfile from '../Student/YourProfile/YourProfile';
import MyCourses from '../Student/MyCourses/MyCourses';
import ViewLecture from '../Common/ViewLecture/ViewLecture';
import YourProfile from '../Student/YourProfile/YourProfile';


function StudentRoute() {
  return (
    <div>
      <Routes>
       <Route path="/student/profile" element={<YourProfile />} /> 
        <Route path="/student/mycourses" element={<MyCourses />} />
        <Route path={`/student/viewlecture/:courseCode`} element={<ViewLecture />} />
      </Routes>
    </div>
  )
}

export default StudentRoute