import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route} from 'react-router-dom';
import Layout from './Layout/Layout';
import AboutUs from './pages/About-us/AboutUs';
import WishListpage from './pages/Wishlistsection/WishListpage';
import Productdetailpage from './pages/Productdetailpage/Productdetailpage';
import Contact from './components/Contact/Contact';
import LoginRegister from './components/Contact/LoginRegister';
import Shoppage from './pages/Shoppage/Shoppage';
import Layout2 from './Layout/Layout2';
import Checkout1 from './components/Checkout/Checkout1';
import Checkout2 from './components/Checkout/Checkout2';
import Checkout3 from './components/Checkout/Checkout3';
import Checkout4 from './components/Checkout/Checkout4';
import Productdetails from './components/Details/Productdetails';
import Faqpage from './pages/faqsection/Faqpage';

function App() {
  return (
    <div className="">

        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUs />}/>
            <Route path='/wishlist' element={<WishListpage />}/>
            <Route path='/product-detail' element={<Productdetailpage />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/login' element={<LoginRegister />}/>
            <Route path='/shop' element={<Shoppage />}/>
            <Route path='/checkout4' element={<Checkout4 />}/>
            <Route path='/productdetail' element={<Productdetails />}/>
            <Route path='*' element={<Home />}/> 
            <Route path='/faq' element={<Faqpage />}/> 
            <Route element={<Layout2 />}>
              <Route path='/checkout' element={<Checkout1 />}/>
              <Route path='/checkout2' element={<Checkout2 />}/>
              <Route path='/checkout3' element={<Checkout3 />}/>
            </Route>
          </Route>


        </Routes>

    </div>
  );
}

export default App;
