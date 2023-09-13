import React from 'react';
import { ScaleLoader } from 'react-spinners';

const UseSpinner = () => {
    return (
      <div
      className='
      h-[100vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    '
    >
      <ScaleLoader size={100} color='#42C3E4' />
    </div>
    );
   
};

export default UseSpinner;