import React from 'react';

const FixedWidth = ({children}) => {
    return (
        <div className= "mx-w-[2520px] mx-auto lg:px-40 xl:px-20 md:px-10 sm:px-2 px-4">
        {children}
      </div>
    );
};

export default FixedWidth;