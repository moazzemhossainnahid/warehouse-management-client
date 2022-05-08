import axios from 'axios';
import { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');
    // console.log(user);
    useEffect( () => {
        const getToken = async() => {
            const email = user?.user?.email;
            const {data} = await axios.post('https://serene-mesa-99604.herokuapp.com/login', {email});
            localStorage.setItem('accessToken' , data);
            setToken(data);
        }

        getToken();
    },[user]);


    return [token, setToken];
};

export default useToken;