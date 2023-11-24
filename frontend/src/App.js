import Navbar from './components/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Marketplace from './components/Marketplace'
import Subsidies from './components/Subsidiaries';
import Mentorship from './components/Mentorship';
import AboutView from './components/About';
import FinanceView from './components/FinanceView';
import SellerLogin from './components/SellerLogin';
import BuyerLogin from './components/BuyerLogin';
import ListItems from './components/ListItems';
import ProductDetails from './components/ProductView';


function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path='/subsidies' element={<Subsidies/>} />
        <Route path='/mentorship' element={<Mentorship/>} />
        <Route path='/about' element={<AboutView/>} />
        <Route path='/finance' element={<FinanceView/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />

        <Route path='/sellerlogin/listitems' element={<ListItems />} />
        <Route path='/sellerlogin' element={<SellerLogin />} />
        <Route path='/buyerlogin' element={<BuyerLogin />} />
      </Routes>
    
      
    </div>
  );
}

export default App;

aasssssasasas