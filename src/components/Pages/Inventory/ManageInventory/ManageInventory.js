import React from 'react';
import useVegetable from '../../../Hooks/useVegetable';
import Manage from './Manage/Manage';

const ManageInventory = () => {
    const [vegetables] = useVegetable();
    return (
        <div className='my-32'>
            <h3 className='py-10 text-2xl'>Manage all Inventory</h3>
            <div className="">
            {
                vegetables.map(vtable => <Manage key = {vtable._id} vegetable={vtable}/>)
            }
            </div>
        </div>
    );
};

export default ManageInventory;