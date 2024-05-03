import './index.css'

import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className="text-4xl font-ubuntu">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      
      </div>
    
  )
}

export default App
