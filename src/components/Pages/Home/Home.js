import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Button from '../../Hooks/Button';
import useVegetable from '../../Hooks/useVegetable';
import HomeVegetable from '../Inventory/Vegetables/HomeVegetable';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Team from '../Team/Team';
import MySelf from '../MySelf/MySelf';


const Home = () => {
  const {vegetables} = useVegetable();
  const navigate = useNavigate();
    const el = useRef(null);
    useEffect( () => {
      new Typed(el.current, {
        strings: ["Onion", "Cucumber", "Cauliflower", "Radish", "Cabbage", "Corn", "Tomato"],
        startDelay: 200,
        typeSpeed: 200,
        backDelay: 150,
        backSpeed: 150,
        smartBackspace: true,
        showCursor: false,
        loop: true
      })
    },[el]);

    const newVegetables = vegetables.slice(0,6);

    return (
      <div className="">
            {/* // Hero Sction */}
          <section className="mb-40">
      
          <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{backgroundPosition: '50%', backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/142.jpg')", height: '500px'}}></div>
      
          <div className="container mx-auto px-6 md:px-12 xl:px-32">
            <div className="text-center text-gray-800">
              <div className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12" style={{marginTop: '-170px', background: 'hsla(0, 0%, 100%, 0.7)', backdropFilter: 'blur(30px)'}}>
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 h-48">Vegetables Planet <br /><span className="text-blue-600 text-3xl md:text-4xl lg:text-5xl block pt-3">Stocked Vegetables : <br /> <span className="text-red-600 block pt-4" ref={el}>Potato </span> </span></h1>
              </div>
            </div>
          </div>

          <div className="container my-24 px-6 mx-auto">

        <h3 className='text-3xl font-bold py-5'>Our <span className="text-orange-700">Inventory</span></h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {
                      newVegetables.map(vtable => <HomeVegetable vegetable={vtable} key={vtable._id}/>)
                  }
              </div>
                <div onClick={()=> navigate('/inventory')} className="my-20">
                <Button className="">See More Inventory</Button>
                </div>
          </div>
        </section>
        <Team/>
        <MySelf/>
      </div>
    );
};

export default Home;