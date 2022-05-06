import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const UpdateQuantity = () => {
    const { register, handleSubmit } = useForm();
    const {id} = useParams();
    const [inventory, setInventory] = useState({});

    useEffect( () => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setInventory(data))
    },[id]);

    const onSubmit = updateQuantity => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method:'PUT', headers: {
                'content-type':'application/json'
            }, body: JSON.stringify(updateQuantity)
        })
        .then(res => res.json())
        toast.success("Updated Successfully");
    }

    return (
        <div className="block mx-auto p-6 my-36 rounded-lg shadow-lg bg-purple-200 max-w-md">
        <h3 className="text-3xl bg-amber-300 shadow py-5">Update Quantity</h3>
        <h4 className="text-2xl font-bold py-3 shadow ">{inventory.vegename}</h4>

  <form onSubmit={handleSubmit(onSubmit)} className='p-4'>
    
    <div className="form-group mb-6">
      <input {...register("quantity", { required: true})} type="number" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
        placeholder="Enter Quantity"/>
    </div>

    <button type="submit" className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Update Quantity</button>
  </form>
</div>
    );
};

export default UpdateQuantity;