import { useEffect, useState } from 'react';

const useVegetable = () => {
    const [vegetables, setVegetables] = useState([]);

    useEffect( () => {
        fetch('https://serene-mesa-99604.herokuapp.com/inventories')
        .then(res => res.json())
        .then(data => setVegetables(data))
    }, []);


    return {vegetables, setVegetables};
};

export default useVegetable;