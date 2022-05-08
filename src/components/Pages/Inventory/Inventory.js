import React from 'react';
import useVegetable from '../../Hooks/useVegetable';
import './Inventory.css';
import Vegetables from './Vegetables/Vegetables';

// import Manage from '@iconscout/react-unicons/icons/uil-setting';
// import Add from '@iconscout/react-unicons/icons/uil-plus';
// import { useNavigate } from 'react-router-dom';
// import useFirebase from '../../Hooks/useFirebase';

const Inventory = () => {
    const {vegetables} = useVegetable();
    // const {user} = useFirebase();
    // const navigate = useNavigate();
    return (
        <div className="container mx-auto">

            {/* {
                user ? 
                <div className="bg-slate-300 w-3/4 mx-auto py-16">
                <div className="w-64 mx-auto">
                <button onClick={() => navigate('/manageinventory')} className='text-gray-700 text-xl flex justify-between items-center w-full mx-auto py-3 hover:text-gray-900 hover:shadow hover:px-2 duration-300'><Manage/><span className="pl-2">Manage Inventory</span></button>
                <button onClick={() => navigate('/addinventory')} className='text-gray-700 text-xl flex justify-between items-center w-full mx-auto py-3 hover:text-gray-900 hover:shadow hover:px-2 duration-300'><Add/><span className="pl-2">Add Inventory</span></button>
                </div>
                </div> : ''
            } */}

            <div className='container'>
            <h3 className='text-3xl font-bold py-5 my-5'>All <span className="text-green-600">Inventory</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    vegetables.map(vtable => <Vegetables vegetable={vtable} key={vtable._id}/>)
                }
            </div>
            </div>
        </div>
    );
};

export default Inventory;



