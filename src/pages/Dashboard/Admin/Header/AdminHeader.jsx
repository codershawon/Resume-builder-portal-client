import React from 'react';
import PremiumTemplateUsers from './PremiumTemplateUsers';
import TotalTemplate from './TotalTemplate';
import TotalSale from './TotalSale';
import TotalSoldTemplate from './TotalSoldTemplate';

const AdminHeader = () => {
    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-4  gap-5  my-10 '>
                <TotalSale />
                <PremiumTemplateUsers />
                <TotalSoldTemplate/>
                <TotalTemplate />
            </div>
        </div>
    );
};

export default AdminHeader;