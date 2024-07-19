<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import axios from "axios"


// 


function UpdateCourse() {

    const [teachers,setTeachers] = useState(null)
    const [TotalCourse,setTotalCourses] = useState([]);

    const [courseData,setCourseData] =useState({
        courseName:"",
        courseCode:"",
        courseDescription:"",
        coursePrice:"",
        courseDuration:"",
        courseStartDate:null,
        courseEndDate:null,
        courseTeacher:"",
        courseThumbnail:null
    })

    useEffect(() => {
         axios.get('/api/admin/getTeachers').then(res => setTeachers(res.data.data))
         axios.get('/api/course/getCourses').then(res => setTotalCourses(res.data.data));
    },[])



    const handleOnSubmit = async(e) => {
        e.preventDefault();
        courseData.courseStartDate = new Date(courseData.courseStartDate).toDateString();
        courseData.courseEndDate = new Date(courseData.courseEndDate).toDateString();
        const res = await axios.post('/api/course/updateCourse',courseData,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        });
        console.log(res);
    }


    

    return (
        <div className="flex items-center w-full justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-2xl p-6 bg-white border border-black-300 rounded-md shadow-md">
                <h2 className="text-2xl font-bold text-center mb-4">Update Course</h2>
                <p className="text-center mb-6">Kindly fill this form to Update course</p>
                <form onSubmit={handleOnSubmit}  method="POST" enctype="multipart/form-data">
                    {/* Course Name */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="courseName">Course Name</label>
                        <select 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            id="courseName" onClick={(e) => setCourseData({...courseData,courseName:e.target.value})}
                        >
                            {TotalCourse.map((course,i) => {
                               
                                return <option key={i} value={course.courseName}>{course.courseName}</option>
                            })}
                        </select>
                    </div>

                    {/* Course Code */}

                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="courseCode">Course Code</label>
                            <select className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
                                {TotalCourse.map((course,i) => {
                                    return <option className=''  key={i} value={course.courseCode}>{course.courseCode}</option>
                                })}
                            </select>
                    </div>

                    {/* Course Description */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="courseDescription">Course Description</label>
                        <textarea
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="courseDescription"
                            placeholder="Enter course description"
                            rows="4"
                            onChange={(e) => setCourseData({...courseData,courseDescription:e.target.value})}
                        ></textarea>
                    </div>

                    {/* Course Price */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="coursePrice">Course Price</label>
                        <input 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="number"
                            id="coursePrice"
                            placeholder="Enter course price"
                            onChange={(e) => setCourseData({...courseData,coursePrice:e.target.value})}
                        />
                    </div>

                    {/* Course Duration */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="courseDuration">Course Duration (minutes)</label>
                        <input 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="number"
                            id="courseDuration"
                            placeholder="Enter course duration in minutes"
                            onChange={(e) => setCourseData({...courseData,courseDuration:e.target.value})}
                        />
                    </div>

                    {/* Course Start Date */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="startDate">Course Start Date</label>
                        <input 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="date"
                            id="startDate"
                            onChange={(e) => setCourseData({...courseData,courseStartDate:e.target.value})}
                        />
                    </div>

                    {/* Course End Date */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="endDate">Course End Date</label>
                        <input 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="date"
                            id="endDate"
                            onChange={(e) => setCourseData({...courseData,courseEndDate:(e.target.value)})}
                        />
                    </div>

                    {/* Course Teacher */}
                    {teachers !== null  && <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="courseTeacher">Course Teacher</label>
                        <select 
                            className="w-full text-black px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            id="courseTeacher"
                            onChange={(e) => setCourseData({...courseData,courseTeacher:e.target.value})}
                        >
                            <option value="">Select Teacher</option>
                            {teachers.length > 1 ? teachers.map((teacher) => {
                                return <option value={teacher.teacherFullName}>{teacher.teacherFullName}</option>
                            }):<option value={teachers[0].teacherFullName}>{teachers[0].teacherFullName}</option>}
                    
                        </select>
                    </div>}

                    {/* Course Thumbnail */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="courseThumbnail">Course Thumbnail</label>
                        <input type='file'   accept='image/png, image/jpeg' onChange={(e) => setCourseData({...courseData,courseThumbnail:e.target.files[0]})}/>
                    </div>

                    {/* Submit Button */}
                    <button 
                        className="w-full px-3 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="submit"
                    >
                        Create Course
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UpdateCourse;
=======
import React, { useState } from 'react';

function UpdateCourse() {
  const [courseName, setCourseName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [discount, setDiscount] = useState('');
  const [features, setFeatures] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // For example, you might send this data to your backend server
    const updatedCourse = {
      courseName,
      startDate,
      discount,
      features,
    };
    console.log('Updated Course:', updatedCourse);
  };

  return (
    <div>
      <h2>Update Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Course Name:</label>
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </div>
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label>Discount (%):</label>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>
        <div>
          <label>Additional Features:</label>
          <textarea
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
          />
        </div>
        <button type="submit">Update Course</button>
      </form>
    </div>
  );
}

export default UpdateCourse;
>>>>>>> c868155b17e2caedec627e97715bba6c824824ea
