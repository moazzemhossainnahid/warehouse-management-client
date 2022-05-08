
import React from 'react';
import './AddInventory.css';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import useFirebase from '../../../Hooks/useFirebase';

const AddInventory = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useFirebase();
    console.log(user);
    const onSubmit = data => {
      const product = {...data, sold: 0};
        const url = `https://serene-mesa-99604.herokuapp.com/inventory`;
        fetch(url, {
            method:'POST', headers: {
                'content-type':'application/json'
            }, body: JSON.stringify(product)
        })
        .then(res => res.json())
        toast.success("Added Successfully");
        reset();
    }
    
    return (
        <div className="block mx-auto p-6 my-36 rounded-lg shadow-lg bg-purple-200 max-w-md">
        <h3 className="text-3xl bg-amber-300 shadow py-5">Add Inventory</h3>

  <form onSubmit={handleSubmit(onSubmit)} className='p-4'>
    
    <div className="form-group mb-6">
      <input {...register("vegename", { required: true})} type="text" className="form-control block
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
        placeholder="Enter Vegetable Name"/>
    </div>
    
    <div className="form-group mb-6">
      <input {...register("email", { required: true})} type="email" value={user?.email} className="form-control block
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
        placeholder="Enter Email Address"/>
    </div>
    
    <div className="form-group mb-6">
      <input {...register("price", { required: true})} type="number" className="form-control block
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
        placeholder="Enter Vegetable Price"/>
    </div>
    
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

    <div className="form-group mb-6">
      <input {...register("supplier", { required: true})} type="text" className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
        placeholder="Enter Supplier Name"/>
    </div>
    <div className="form-group mb-6">
        <textarea {...register("description", { required: true})} className="
        form-control
        resize-none
        block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
    " id="exampleFormControlTextarea13" rows="3" placeholder="Enter Inventory Description"></textarea>
    </div>
    <div className="form-group mb-6">
      <input {...register("image", { required: true})} type="url" className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
        placeholder="Enter Image URL"/>
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
      ease-in-out">Add Item</button>
  </form>
</div>
    );
};

export default AddInventory;