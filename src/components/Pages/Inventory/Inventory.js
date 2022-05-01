import React from 'react';
import useVegetable from '../../Hooks/useVegetable';
import './Inventory.css';
import Vegetables from './Vegetables/Vegetables';

const Inventory = () => {
    const [vegetables] = useVegetable();
    console.log(vegetables);
    return (
        <div>
            <h3>This is Inventory: {vegetables.length}</h3>
            <div className="">
                {
                    vegetables.map(vtable => <Vegetables vegetable={vtable} key={vtable._id}/>)
                }
            </div>
        </div>
    );
};

export default Inventory;



