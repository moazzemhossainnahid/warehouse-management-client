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
import Inventory from './components/Pages/Inventory/Inventory';
import Footer from './components/SharedPages/Footer/Footer';
import ManageInventory from './components/Pages/Inventory/ManageInventory/ManageInventory';
import InventoryDetail from './components/Pages/Inventory/InventoryDetail/InventoryDetail';
import AddInventory from './components/Pages/Inventory/AddInventory/AddInventory';
import { Toaster } from 'react-hot-toast';
import UpdateInventory from './components/Pages/Inventory/UpdateInventory/UpdateInventory';
import MyItems from './components/Pages/Inventory/MyItems/MyItems';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/addinventory' element={<RequireAuth><AddInventory/></RequireAuth>}/>
        <Route path='/myitems' element={<RequireAuth><MyItems/></RequireAuth>}/>
        <Route path='/updateinventory/:id' element={<RequireAuth><UpdateInventory/></RequireAuth>}/>
        <Route path='/manageinventory' element={<RequireAuth><ManageInventory/></RequireAuth>}/>
        <Route path='/inventory/:id' element={<RequireAuth><InventoryDetail/></RequireAuth>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/about' element={<RequireAuth><About/></RequireAuth>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
      <Toaster/>
    </div>
  );
}

export default App;
