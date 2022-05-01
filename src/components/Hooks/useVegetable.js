import { useEffect, useState } from 'react';

const useVegetable = () => {
    const [vegetables, setVegetables] = useState([]);
    useEffect( () => {
        fetch('vegetables.json')
        .then(res => res.json())
        .then(data => setVegetables(data))
    }, []);
    return [vegetables, setVegetables];
};

export default useVegetable;