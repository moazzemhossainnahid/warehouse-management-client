import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import './InventoryDetail.css';

const InventoryDetail = () => {
    const { register, handleSubmit, reset } = useForm();
    const {id} = useParams();
    const [inventory, setInventory] = useState({});


    useEffect( () => {
        const url = `https://serene-mesa-99604.herokuapp.com/inventory/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setInventory(data))
    },[id]);


    const handleDelivery = () => {
        const {quantity, sold, ...rest} = inventory;
        const newQuantity = parseInt(quantity) - 1;
        const newSold = parseInt(sold) + 1;
        const newInventory = {quantity: newQuantity, sold: newSold, ...rest};
        if(quantity > 0){
            setInventory(newInventory);
            
            const url = `https://serene-mesa-99604.herokuapp.com/updatequantity/${id}`;
            fetch(url, {method: 'PUT', headers: {'content-type':'application/json'}, body: JSON.stringify({newQuantity, newSold})})
            .then(res => res.json())

            toast.success("Delivered Successfully");
        }else{
            toast.error("Quantity Not Available");
        }


    }

    const onSubmit = (data) => {
        
        const quantityValue = data.quantity;
        const {quantity, ...rest} = inventory;
        const newQuantity = parseInt(quantity) + parseInt(quantityValue);
        const newInventory = {quantity: newQuantity, ...rest};
        setInventory(newInventory);
        reset();

        const url = `https://serene-mesa-99604.herokuapp.com/updatequantity/${id}`;
        fetch(url, {method: 'PUT', headers: {'content-type':'application/json'}, body: JSON.stringify({newQuantity})})
        .then(res => res.json());
        toast.success("Quantity Updated Successfully");

    }



    
    const {vegename, image, description, price, quantity, sold, supplier} = inventory;
    return (
        <div className='py-10'>
            <section className="mb-32 mt-16 w-5/6 md:w-2/4 mx-auto text-gray-800 text-center">
            <div className="">

            <div className="mb-6 lg:mb-0">
                <div className="relative block p-3 bg-gray-200 rounded-lg shadow-lg">
                <div className="flex">
                    <div
                    className="w-full relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img src={image} alt="" className="w-96 h-80 mx-auto" />
                    <a href="#!">
                        <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
                    </a>
                    </div>
                </div>
                <div className="p-6 text-left ">
                    <h5 className="font-bold  text-2xl mb-3">{vegename}</h5>
                    <p className="text-gray-500 text-lg font-bold mb-4">
                    <small>Price: ${price} /kg </small>
                    </p>
                    <p className="mb-2 font-semibold text-gray-700 pb-2">Quantity: {quantity} kg</p>
                    <p className="mb-2 font-semibold text-gray-700 pb-2">Sold: {sold} kg</p>
                    <p className="mb-2 font-semibold text-gray-600 pb-2">Supplier: {supplier}</p>
                    <p style={{overflowWrap: 'break-word'}} className="mb-2 pb-2">{description}</p>
                    <div className="flex mx-auto justify-center items-center">
                    <button onClick={() => handleDelivery(quantity)} className='flex justify-center my-5 px-16 py-2.5 bg-emerald-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out'>Delivery</button>
                    </div>
                </div>
                </div>
            </div>

            <div className="my-16 bg-black p-5">
                <h3 className="py-10 text-2xl font-bold text-white">Update Quantity</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col justify-center items-center gap-5">
                        
                    <input {...register("quantity", { required: true})} type="number" className="form-control block
                        w-2/4
                        px-3
                        mx-2
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-700
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                        placeholder="Enter Quantity"/>

                    <button type='submit' className=' px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out'>Update Quantity</button>

                    </div>
                    </form>
            </div>

            </div>

        </section>
        </div>
    );
};

export default InventoryDetail;