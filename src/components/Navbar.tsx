import {Link} from "react-router-dom";
import logo from "../assets/logoBranca.png";
import user from "../assets/user.webp";
import {Menu , X } from "lucide-react"
import { useState, useEffect} from "react";
import { useUser } from "../UserContext";
import { useMediaQuery } from 'react-responsive';

 const Navbar : React.FC = ({  }) => {

    const { user } = useUser();

  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
     setMenuOpen (!menuOpen);
  };
  

const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
 
<div className="bg-azul px-4 py-2 flex justify-between items-center">
    <img className="h-12" src={logo} />
    
    {isMobile ? (
       
        <div className="flex items-center">
            <button className="md:hidden w-12 " onClick={toggleMenu}>
                {menuOpen ? <X color="white" className="h-6 w-6" /> : <Menu color="white" className=" h-6 w-6" />}
            </button>
            {menuOpen && (
                <ul className=" ">
                    <li className="text-branco hover:bg-branco hover:text-azul rounded-md px-2 py-0.5 text-xl font-medium"><Link to="/">Home</Link></li>
                    <li className="text-branco hover:bg-branco hover:text-azul rounded-md px-2 py-0.5 text-xl font-medium"><Link to="/about">Sobre</Link></li>
                    <li className="text-branco hover:bg-branco hover:text-azul rounded-md px-2 py-0.5 text-xl font-medium"><Link to="/contact">Contato</Link></li>
                    <li className="text-branco hover:bg-branco hover:text-azul rounded-md px-2 py-0.5 text-xl font-medium"><Link to="/login">Login</Link></li>
                </ul>
            )}
        </div>

    ) : (
       
        <ul className=" flex gap-28">
            <li className="text-branco hover:bg-branco  hover:text-azul rounded-md px-2 py-0.5 text-xl font-medium"><Link to="/">Home</Link></li>
            <li className="text-branco  hover:bg-branco hover:text-azul rounded-md px-2 py-0.5 text-xl font-medium"><Link to="/about">Sobre</Link></li>
            <li className="text-branco  hover:bg-branco hover:text-azul rounded-md px-2 py-0.5 text-xl font-medium"><Link to="/contact">Contato</Link></li>
            <Link to="/login"><img className="h-8 w-8 rounded-full" src={user.imageUrl} /></Link>
        </ul>
    )}
</div>
        
    
  )
}

export default Navbar
 

