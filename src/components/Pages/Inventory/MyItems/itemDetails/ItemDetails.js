import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemDetails = ({item}) => {
    const {_id, vegename, image, description, price, quantity, sold, supplier} = item;
    const navigate = useNavigate();
    return (
        <div>
            <div className="mb-6 my-20 lg:mb-0">
                <div className="relative block p-3 bg-gray-200 rounded-lg shadow-lg">
                <div className="flex">
                    <div
                    className="relative overflow-hidden bg-no-repeat mx-auto w-full bg-cover shadow-lg rounded-lg -mt-4"
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
                    <p className="mb-2 pb-2">{description.slice(0,120)}</p>
                    <button onClick={() => {navigate(`/inventory/${_id}`)}} className='flex w-full justify-center px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Inventory Details</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;