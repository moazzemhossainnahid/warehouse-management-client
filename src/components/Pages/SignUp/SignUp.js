import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './SignUp.css';

const SignUp = () => {
    const navigate = useNavigate();
    const {handleNameBlur,handleEmailBlur,handlePasswordBlur,handleConPassBlur,passError,conPassError,handleSignupForm} = useFirebase();
    const [checked, setChecked] = useState(false);
    return (
        <div className="block p-6 text-left mx-auto rounded-lg shadow-lg bg-blue-200 max-w-sm">
            <h3 className="text-2xl pb-7 text-center text-red-800">Create an Account</h3>
  <form onSubmit={handleSignupForm}>
    <div className="form-group mb-6">
      <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700">Name</label>
      <input onBlur={handleNameBlur} type="text" className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
        aria-describedby="emailHelp" name='name' required placeholder="Enter Your Name"/>
    </div>
    <div className="form-group mb-6">
      <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Email Address</label>
      <input onBlur={handleEmailBlur} type="email" className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
        aria-describedby="emailHelp" name='email' required placeholder="Enter Your Email"/>
    </div>
    <div className="form-group mb-6">
      <label htmlFor="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Password</label>
      <input type="password" onBlur={handlePasswordBlur} className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" required name='password' id="exampleInputPassword2"
        placeholder="Enter Your Password"/>
        <span className="text-red-500">{passError}</span>
    </div>
    <div className="form-group mb-6">
      <label htmlFor="exampleInputPassword3" className="form-label inline-block mb-2 text-gray-700">Confirm Password</label>
      <input type="password" onBlur={handleConPassBlur} className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" required name='confirmpassword' id="exampleInputPassword3"
        placeholder="Enter Confirm Password"/>
        <span className="text-red-500">{conPassError}</span>
    </div>
    <div className="flex justify-between items-center mb-6">
      <div className="form-group form-check">
        <input onClick={()=>setChecked(!checked)} type="checkbox"
          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          id="exampleCheck2"/>
        <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Accept Terms & Condition.</label>
      </div>
    </div>
    <button type="submit" disabled={!checked} className={!checked ? `w-full
      px-6
      py-2.5
      bg-gray-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-gray-700 hover:shadow-lg
      focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-gray-800 active:shadow-lg
      transition
      duration-150
      ease-in-out` : `w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out`}>Sign Up</button>
    <p className="text-gray-800 mt-6 text-center">Already Have an Account? <a href="#!" onClick={() => navigate('/signin')}
        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Sign In</a>
    </p>
  </form>
</div>
    );
};

export default SignUp;