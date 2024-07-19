import React from 'react';
import { Route, Routes,Link } from 'react-router-dom';
import Admin from '../Admin/Admin';

import AdminDashboard from '../Admin/components/Dashboard/Dashboard';
import ViewLecture from '../Common/ViewLecture/ViewLecture';

import CreateCourse from '../Admin/CreateCourse/CreateCourse';
import UpdateCourse from '../Admin/UpdateCourse/UpdateCourse';

function AdminRoute() {

  const sidebarClasses = 'w-64 bg-white border-r border-gray-200 shadow-lg fixed lg:static h-full z-50';
  const linkClasses = 'flex items-center p-4 mt-2 text-gray-600 hover:bg-gray-100 hover:text-green-500 rounded-lg transition-colors duration-200';

 

  return (
    <div className='flex'>

     

      <Routes>


        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/customers" element={<Customer />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/courses" element={<Products />} />
        <Route path="/admin/updateCourses" element={<UpdateCourse />} />

        <Route path="/admin/courses" element={<CourseTable />} />
        <Route path="/admin/viewLectures" element={<ViewLecture />} />

          
              
        <Route path="/customers" element={<OrdersTable />} />

        <Route path="/updateCourse" element={<UpdateCourse />} />

        <Route path="/createCourse" element={<CreateCourse />} />
        <Route path="/admin/updateCourse" element={<UpdateCourse />} />

      </Routes>
    </div>
  )

}

export default AdminRoute
