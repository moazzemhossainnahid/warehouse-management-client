import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Home.css';



const Home = () => {
    const el = useRef(null);
    useEffect( () => {
      new Typed(el.current, {
        strings: ["Onion", "Potato", "Cucumber", "Eggplant", "Radish"],
        startDelay: 200,
        typeSpeed: 200,
        backDelay: 150,
        backSpeed: 150,
        smartBackspace: true,
        showCursor: false,
        loop: true
      })
    },[el])
    return (
        // Hero Sction
        <section className="mb-40">
    
        <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{backgroundPosition: '50%', backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/142.jpg')", height: '500px'}}></div>
    
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="text-center text-gray-800">
            <div className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12" style={{marginTop: '-170px', background: 'hsla(0, 0%, 100%, 0.7)', backdropFilter: 'blur(30px)'}}>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 h-48">Vegetables Planet <br /><span className="text-blue-600 text-3xl md:text-4xl lg:text-5xl block pt-3">Stocked Vegetables : <br /> <span className="text-red-600 block pt-4" ref={el}>Tomato </span> </span></h1>
            </div>
          </div>
        </div>

        <div className="container my-24 px-6 mx-auto">

  {/* <!-- Section: Design Block --> */}
  <section className="mb-32 text-gray-800 text-center">

    <h2 className="text-3xl font-bold mb-12 pb-4 text-center">All Inventory</h2>

    <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
      <div className="mb-6 lg:mb-0">
        <div className="relative block bg-white rounded-lg shadow-lg">
          <div className="flex">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
              data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/024.webp" className="w-full" />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
              </a>
            </div>
          </div>
          <div className="p-6">
            <h5 className="font-bold text-lg mb-3">My paradise</h5>
            <p className="text-gray-500 mb-4">
              <small>Published <u>13.01.2022</u> by
                <a href="" className="text-gray-900">Anna Maria Doe</a></small>
            </p>
            <p className="mb-4 pb-2">
              Ut pretium ultricies dignissim. Sed sit amet mi eget urna
              placerat vulputate. Ut vulputate est non quam dignissim
              elementum. Donec a ullamcorper diam.
            </p>
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read
              more</a>
          </div>
        </div>
      </div>

      <div className="mb-6 lg:mb-0">
        <div className="relative block bg-white rounded-lg shadow-lg">
          <div className="flex">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
              data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/031.webp" className="w-full" />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
              </a>
            </div>
          </div>
          <div className="p-6">
            <h5 className="font-bold text-lg mb-3">Travel to Italy</h5>
            <p className="text-gray-500 mb-4">
              <small>Published <u>12.01.2022</u> by
                <a href="" className="text-gray-900">Halley Frank</a></small>
            </p>
            <p className="mb-4 pb-2">
              Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet
              diam orci, nec ornare metus semper sed. Integer volutpat
              ornare erat sit amet rutrum.
            </p>
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read
              more</a>
          </div>
        </div>
      </div>

      <div className="mb-0">
        <div className="relative block bg-white rounded-lg shadow-lg">
          <div className="flex">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
              data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/081.webp" className="w-full" />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
              </a>
            </div>
          </div>
          <div className="p-6">
            <h5 className="font-bold text-lg mb-3">Chasing the sun</h5>
            <p className="text-gray-500 mb-4">
              <small>Published <u>10.01.2022</u> by
                <a href="" className="text-gray-900">Joe Svan</a></small>
            </p>
            <p className="mb-4 pb-2">
              Curabitur tristique, mi a mollis sagittis, metus felis mattis
              arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
              massa volutpat feugiat. Donec.
            </p>
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read
              more</a>
          </div>
        </div>
      </div>
    </div>

  </section>
  {/* <!-- Section: Design Block --> */}

</div>
      </section>
    );
};

export default Home;