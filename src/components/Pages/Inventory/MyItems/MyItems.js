import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useFirebase from '../../../Hooks/useFirebase';
import ItemDetails from './itemDetails/ItemDetails';
import './MyItems.css';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const {user} = useFirebase();
    useEffect(() => {
        
        const getItems = async() => {
            const email = user.email;
            const url = `http://localhost:5000/myInventories?email=${email}`;
            const {data} = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setItems(data);
        }

        getItems();
    }, [user]);



    return (
        <div className='container mx-auto py-10'>
            <h3 className='py-5 text-3xl font-semibold'>My Items: {items.length}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    items.map(item => <ItemDetails key={item._id} item={item}/>)
                }
            </div>

        </div>
    );
};

export default MyItems;