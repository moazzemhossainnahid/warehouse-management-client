import React from 'react';
import useVegetable from '../../Hooks/useVegetable';
import './Inventory.css';
import Vegetables from './Vegetables/Vegetables';

const Inventory = () => {
    const [vegetables] = useVegetable();
    return (
        <div className='container mx-auto'>
            <h3 className='text-3xl font-bold py-5 my-5'>All Inventory</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    vegetables.map(vtable => <Vegetables vegetable={vtable} key={vtable._id}/>)
                }
            </div>
        </div>
    );
};

export default Inventory;



