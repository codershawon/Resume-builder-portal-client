import React from 'react';
import AdminBarChart from '../../../components/AdminBarChart/AdminBarChart';
import AdminHeader from '../Admin/Header/AdminHeader';
import PaymentsHistory from '../paymentsHistory';
import CustomPieChart from '../../../components/CustomPieChart/CustomPieChart';

const AdminHome = () => {

  return (
    <div>
      <AdminHeader/>
      <div className='flex flex-col lg:flex-row gap-5 mx-auto p-4 lg:p-0'>
        <div className='w-full lg:w-1/2 mt-5'>
          <h1 className='text-3xl font-bold mb-5'>Monthly Resume Sales</h1>
          <AdminBarChart />
        </div>
        <div className='w-full lg:w-1/2 mt-5 rounded-0'>
          <h2 className='text-3xl font-bold mb-5'>Resume Distribution</h2>
          <CustomPieChart />
        </div>
      </div>
      <PaymentsHistory/>
    </div>
  );
};

export default AdminHome;