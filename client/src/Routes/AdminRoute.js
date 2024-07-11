import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from '../Admin/Admin';

import AdminDashboard from '../Admin/components/Dashboard/Dashboard';
import Customer from '../Admin/components/Customer/Customer';
import Orders from '../Admin/components/Orders/OrdersTable';
import Products from '../Admin/components/Products/ProductsTable';
import OrdersTable from '../Admin/components/Orders/OrdersTable';
import CreateCourse from '../Admin/CreateCourse/CreateCourse';
import UpdateCourse from '../Admin/UpdateCourse/UpdateCourse';

function AdminRoute() {

  return (
    <div>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/customers" element={<Customer />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/courses" element={<Products />} />
        <Route path="/admin/updateCourses" element={<UpdateCourse />} />


          
              
        <Route path="/customers" element={<OrdersTable />} />

        <Route path="/updateCourse" element={<UpdateCourse />} />

        <Route path="/createCourse" element={<CreateCourse />} />

      </Routes>
    </div>
  )

}

export default AdminRoute
