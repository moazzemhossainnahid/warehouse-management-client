import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './InventoryDetail.css';

const InventoryDetail = () => {
    const {id} = useParams();
    const [inventory, setInventory] = useState({});
    const [delivery, setDelivery] = useState(20);
    const [update, setUpdate] = useState(0);
    // const [quantity, setQuantity] = useState(0);
    useEffect( () => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setInventory(data))
    },[id]);

    const handleDelivery = (quantity) => {
        const newQuantity = parseInt(quantity);
        const proceed = window.confirm("Are you want to Deliver..?");

        if(proceed){
            setDelivery(newQuantity - 1);
        }
    }

    const handleUpdate = (quantity) => {
        const newQuantity = parseInt(quantity);
        setUpdate(newQuantity + 1);
    }
    const {vegename, image, description, price, quantity, supplier} = inventory;
    return (
        <div className='py-10'>
            <section className="mb-32 mt-16 w-2/4 mx-auto text-gray-800 text-center">
            <div className="">

            <div className="mb-6 lg:mb-0">
                <div className="relative block p-3 bg-white rounded-lg shadow-lg">
                <div className="flex">
                    <div
                    className="relative overflow-hidden bg-no-repeat mx-auto w-full bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
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
                    <p className="mb-2 font-semibold text-gray-700 pb-2">Quantity: {delivery} kg</p>
                    <p className="mb-2 font-semibold text-gray-600 pb-2">Supplier: {supplier}</p>
                    <p className="mb-2 pb-2">{description}</p>
                    <div className="flex justify-around items-center">
                    <button onClick={() => handleDelivery(quantity)} className='flex justify-center px-6 py-2.5 bg-emerald-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out'>Delivery</button>
                    <button onClick={() => handleUpdate(quantity)} className='flex justify-center px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out'>Update</button>
                    </div>
                </div>
                </div>
            </div>

            </div>

        </section>
        </div>
    );
};

export default InventoryDetail;