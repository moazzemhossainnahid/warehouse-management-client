import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

// image
import Google from '../../../images/google-logo.png';
import Github from '../../../images/github-logo.png';
import useFirebase from '../../Hooks/useFirebase';
import { ToastContainer } from 'react-toastify';

const SignIn = () => {
    const {handleGoogleSignin,handleGithubSignin, handleSigninForm,handlePasswordReset,handleEmailBlur,handlePasswordBlur} = useFirebase();
    const navigate = useNavigate();
    return (
        <div className="block p-6 text-left mx-auto rounded-lg shadow-lg bg-blue-200 max-w-sm">
            <h3 className="text-2xl pb-7 text-center text-red-800">Signin Your Account</h3>
  <form onSubmit={handleSigninForm}>

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
      <input onBlur={handlePasswordBlur} type="password" className="form-control block
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
    </div>

    <div className="flex justify-between items-center mb-6">
      <div className="form-group form-check">
        <input type="checkbox"
          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          id="exampleCheck2"/>
        <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Remember me</label>
      </div>
      <a href='#!' onClick={handlePasswordReset}
        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Forgot
        password?</a>
    </div>
    <button type="submit" className="
      w-full
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
      ease-in-out">Sign In</button>
    <p className="text-gray-800 mt-6 text-center">Don't Have an Account? <a href="#!" onClick={() => navigate('/signup')}
        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Sign Up</a>
    </p>
  </form>

  <div className="flex justify-center items-center">
      <div className="line"></div>
      <div className="px-2">or</div>
      <div className="line"></div>
  </div>
  <div className="social pt-5">
      <div onClick={handleGoogleSignin} className="google cursor-pointer bg-gray-400 hover:bg-gray-500 hover:text-white border rounded flex justify-center items-center">
        <img className='w-1/6' src={Google} alt="" />
        <span className="text-xl">Continue With Google</span>
      </div>
      <div onClick={handleGithubSignin} className="google cursor-pointer mt-2 bg-gray-400 hover:bg-gray-500 hover:text-white border rounded flex justify-center items-center">
        <img className='w-1/6 p-2' src={Github} alt="" />
        <span className="text-xl">Continue With Github</span>
      </div>
  </div>
  <ToastContainer/>
</div>
    );
};

export default SignIn;