import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Store from './components/Pages/Store/Store';
import Contact from './components/Pages/Contact/Contact';
import SignIn from './components/Pages/SignIn/SignIn';
import SignUp from './components/Pages/SignUp/SignUp';
import NotFound from './components/Pages/NotFound/NotFound';
import Header from './components/SharedPages/Header/Header';
import About from './components/Pages/About/About';
import Blogs from './components/Pages/Blogs/Blogs';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
