import { useEffect, useState } from 'react';

const useVegetable = () => {
    const [vegetables, setVegetables] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/inventories')
        .then(res => res.json())
        .then(data => setVegetables(data))
    }, []);


    return {vegetables, setVegetables};
};

export default useVegetable;