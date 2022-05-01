import { useEffect, useState } from 'react';

const useVegetable = () => {
    const [vegetables, setVegetables] = useState([]);
    useEffect( () => {
        fetch('vegetables.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, []);
    return [vegetables, setVegetables];
};

export default useVegetable;