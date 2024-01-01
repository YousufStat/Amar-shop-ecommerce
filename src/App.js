import { Route, Routes } from 'react-router-dom';
import './App.css';
import './asset/css/custom.css'
import Navigation from './components/Navigation';
import Products from './pages/Products';
import Home from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import SingleProduct from './pages/SingleProduct';
import { Cart } from './pages/Cart';
import { ErrorPage } from './pages/ErrorPage';
import { Offers } from './pages/Offers';
import { Service } from './pages/Service';
import { Footer } from './components/Footer';


function App() {
  return (
   <>
    <Navigation/>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/service" element={<Service />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
   </>
  );
}

export default App;
