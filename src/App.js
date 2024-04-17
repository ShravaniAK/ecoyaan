import logo from './logo.svg';
import './App.css';
import ImageSlider from './ImageSlider';
import ImageSliderAuto from './ImageSliderAuto';
import Home from './Home';
import ContactForm from './Contact';
import Footer from './Footer/Footer';

export const ImageData = [
    {
        ImageNo:'1/3',
       
        ImageSrc: "/carousel-1.png",
       
    },
    {
        ImageNo: '2/3',
       
        ImageSrc: "/carousel-2.png",
       
    },
    {
        ImageNo: '3/3',
        
        ImageSrc: '/carousel-3.png',
       
    }
];

function App() {
  return (
   <div>
    <ImageSliderAuto ImageData={ImageData} SlideInterValTime={ 3000}/>
    <Home/>
    <ContactForm/>
    <Footer/>
   </div>
  );
}

export default App;
