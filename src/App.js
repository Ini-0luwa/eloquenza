import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout/Layout';
import AboutUs from './pages/About-us/AboutUs';
import WishListpage from './pages/Wishlistsection/WishListpage';
import Cartsection from './pages/Cart/Cartsection';
import Productdetailpage from './pages/Productdetailpage/Productdetailpage';
import Contact from './components/Contact/Contact';
import LoginRegister from './components/Contact/LoginRegister';
import Shoppage from './pages/Shoppage/Shoppage';

function App() {
  return (
    <div className="">
      <BrowserRouter>

        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUs />}/>
            <Route path='/wishlist' element={<WishListpage />}/>
            <Route path='/cart' element={<Cartsection />}/>
            <Route path='/product-detail' element={<Productdetailpage />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/login' element={<LoginRegister />}/>
            <Route path='/shop' element={<Shoppage />}/>
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
