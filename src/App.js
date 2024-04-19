import logo from './logo.svg';
import './App.css';
import ImageSlider from './ImageSlider';
import ImageSliderAuto from './ImageSliderAuto';
import Home from './Home';
import ContactForm from './Contact';
import Footer from './Footer/Footer';
import Header from './Header';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './About';



function App() {
  return (
   <div>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    
    
    
    
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    
   
   </div>
  );
}

export default App;
