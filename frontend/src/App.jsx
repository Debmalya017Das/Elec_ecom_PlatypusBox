import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Default from './pages/404/Default';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Account from './pages/Account/Account';
import CartPage from './pages/Cart/Cart';
import BillingPage from './pages/Billing/Billing';
import WishlistPage from './pages/Wishlist/Wishlist';

function App() {
  return (
    <div className="relative">  
      <BrowserRouter>
        <Navbar className="z-50" /> 
        <div className="relative z-0"> 
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element ={<About/>}/>
            <Route path="/contact" element= {<Contact/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/billing" element={<BillingPage/>}/>
            <Route path="/wishlist" element={<WishlistPage/>}/>
            <Route path="*" element={<Default />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;