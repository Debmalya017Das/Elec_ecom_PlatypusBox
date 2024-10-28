import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Default from './pages/404/Default';
import About from './pages/About/About';

function App() {
  return (
    <div className="relative">  {/* Add relative positioning to parent */}
      <BrowserRouter>
        <Navbar className="z-50" /> {/* Add z-index to ensure dropdown appears above other content */}
        <div className="relative z-0"> {/* Lower z-index for main content */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element ={<About/>}/>
            <Route path="*" element={<Default />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;