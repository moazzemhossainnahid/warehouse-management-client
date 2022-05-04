import React from 'react';
import toast from 'react-hot-toast';
import useVegetable from '../../../Hooks/useVegetable';
// import Manage from './Manage/Manage';

import Edit from '@iconscout/react-unicons/icons/uil-edit';
import Delete from '@iconscout/react-unicons/icons/uil-trash-alt';
import { useNavigate } from 'react-router-dom';
const ManageInventory = () => {
    const {vegetables, setVegetables} = useVegetable();
    const navigate = useNavigate();

    
    const handleDeleteInventory = (id) => {
        const proceed = window.confirm('Are You Sure to Delete ?')
        if(proceed){
            console.log('deleting with id', id);
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
                toast.success('Deleted Successfully');
                if(data.deletedCount > 0){
                    const newInventory = vegetables.filter(vtable => vtable._id !== id);
                    setVegetables(newInventory);
                }
            })
        }
    }
    return (
        <div className='my-32'>
            <h3 className='py-10 text-2xl'>Manage all Inventory</h3>
            <div className="">
            {
                vegetables.map(vtable => (
                    <div  key={vtable._id}>
                    {/* <Manage key = {vtable._id} vegetable={vtable}/> */}
                    <div className='flex justify-between items-center w-3/4 bg-rose-300 rounded m-5 mx-auto h-20 p-3'>
                        <img className='w-16 object-cover' src={vtable.image} alt="" />
                        <h3>{vtable.vegename}</h3>

                        <div className="gap-3">
                            <button onClick={() => navigate(`/updateinventory/${vtable._id}`)} className="mx-3 bg-green-700 rounded p-1 text-white"><Edit/></button>
                            <button onClick={() => handleDeleteInventory(`${vtable._id}`)} className="mx-3 bg-red-700 rounded p-1 text-white"><Delete/></button>
                        </div>
                    </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default ManageInventory;