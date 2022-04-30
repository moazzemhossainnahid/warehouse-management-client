
import React from 'react';

const Button = ({children}) => {
    return (
        <button className='bg-red-700 text-white text-xl font-[poppins] py-2 px-6 rounded-full md:ml-8 hover:bg-gray-500 duration-300'>
            {children}
        </button>
    );
};

export default Button;