import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
function App() {




  return (
    <div>
      <div className="text-4xl font-ubuntu bg-stone-100">
        <Navbar />
        <Outlet />
        <Footer />
       
      </div>
      
      </div>
    
  )
}

export default App
