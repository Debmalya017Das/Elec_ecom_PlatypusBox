import { useState } from 'react'
import   {BrowserRouter, Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Navbar from './components/navbar';
import Footer from './components/footer';


function App() {

  return (
    <>
       <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
