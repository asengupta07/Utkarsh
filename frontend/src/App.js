import Navbar from './components/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Marketplace from './components/Marketplace'
import Subsidies from './components/Subsidiaries';
import Mentorship from './components/Mentorship';
import AboutView from './components/About';

import SellView from './components/SellView';



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
        
        <Route path='/sell' element={<SellView />} />
      </Routes>
    
      
    </div>
  );
}

export default App;
