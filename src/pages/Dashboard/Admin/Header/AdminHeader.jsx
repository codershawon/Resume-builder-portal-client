import React from 'react';
import PremiumTemplateUsers from './PremiumTemplateUsers';
import TotalTemplate from './TotalTemplate';
import TotalSale from './TotalSale';
import TotalSoldTemplate from './TotalSoldTemplate';

const AdminHeader = () => {
    return (
        <div>
            <div className='flex justify-center gap-5  mt-10 flex-wrap'>
                <TotalSale />
                <PremiumTemplateUsers />
                <TotalSoldTemplate/>
                <TotalTemplate />
            </div>
        </div>
    );
};

export default AdminHeader;