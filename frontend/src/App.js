import Navbar from './components/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/helth" exact element={<Home />} />
        
      </Routes>
    
      
    </div>
  );
}

export default App;
