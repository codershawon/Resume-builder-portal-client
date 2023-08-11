import React from 'react';

const FixedWidth = ({children}) => {
    return (
        <div className="mx-w-[1500px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        {children}
      </div>
    );
};

export default FixedWidth;