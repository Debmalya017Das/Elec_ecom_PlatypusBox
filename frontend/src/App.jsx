import { useState } from 'react'
import   {BrowserRouter, Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup'

function App() {

  return (
    <>
       <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
