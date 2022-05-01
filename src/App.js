import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Contact from './components/Pages/Contact/Contact';
import SignIn from './components/Pages/SignIn/SignIn';
import SignUp from './components/Pages/SignUp/SignUp';
import NotFound from './components/Pages/NotFound/NotFound';
import Header from './components/SharedPages/Header/Header';
import About from './components/Pages/About/About';
import Blogs from './components/Pages/Blogs/Blogs';
import RequireAuth from './components/Hooks/RequireAuth';
import DashBoard from './components/Pages/DashBoard/DashBoard';
import Inventory from './components/Pages/Inventory/Inventory';
import { ToastContainer } from 'react-toastify';
import Footer from './components/SharedPages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/about' element={<RequireAuth><About/></RequireAuth>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      {/* <Footer/> */}
      <ToastContainer/>
    </div>
  );
}

export default App;
