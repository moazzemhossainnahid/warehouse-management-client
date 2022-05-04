import React from 'react';
import './Manage.css';

import Edit from '@iconscout/react-unicons/icons/uil-edit';
import Delete from '@iconscout/react-unicons/icons/uil-trash-alt';
const Manage = ({vegetable}) => {
    const {_id, vegename, image} = vegetable;
    return (
        <div className='flex justify-between items-center w-3/4 bg-rose-300 rounded m-5 mx-auto h-20 p-3'>
            <img className='w-16 object-cover' src={image} alt="" />
            <h3>{vegename}</h3>

            <div className="gap-3">
                <button className="mx-3 bg-green-700 rounded p-1 text-white"><Edit/></button>
                <button className="mx-3 bg-red-700 rounded p-1 text-white"><Delete/></button>
            </div>
        </div>
    );
};

export default Manage;