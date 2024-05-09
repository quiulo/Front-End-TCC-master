import {Link} from "react-router-dom";
import logo from "../assets/logoBranca.png";
import user from "../assets/user.webp";
import {Menu , X } from "lucide-react"
import { useState, useEffect} from "react";
import { useUser } from "../UserContext";


 const Navbar : React.FC = ({  }) => {



  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen (!menuOpen);
  };
  

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
      const handleResize = () => {
          setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);


  return (
 
<div className="bg-azul px-4 py-2 flex justify-between items-center">
    <img className="h-12" src={logo} />
    {/* Verifica se a tela é menor que 768px */}
    {window.innerWidth < 768 ? (
        // Se for menor que 768px, renderiza o menu suspenso
        <div className="flex items-center">
            <button className="md:hidden w-12" onClick={toggleMenu}>
                {menuOpen ? <X color="white" className="h-6 w-6" /> : <Menu color="white" className="h-6 w-6" />}
            </button>
            {menuOpen && (
                <ul className="bg-azul">
                    <li className="text-branco hover:bg-branco hover:text-azul rounded-md px-2 py-0.5 text-xl font-medium"><Link to="/">Home</Link></li>
                    <li className="text-branco hover:bg-branco hover:text-azul rounded-md px-2 py-0.5 text-xl font-medium"><Link to="/about">Sobre</Link></li>
                    <li className="text-branco hover:bg-branco hover:text-azul rounded-md px-2 py-0.5 text-xl font-medium"><Link to="/contact">Contato</Link></li>
                    <li className="text-branco hover:bg-branco hover:text-azul rounded-md px-2 py-0.5 text-xl font-medium"><Link to="/login">Login</Link></li>
                </ul>
            )}
        </div>
    ) : (
        // Se for maior ou igual a 768px, renderiza todos os itens da navbar diretamente
        <ul className="bg-azul flex gap-28">
            <li className="text-branco hover:bg-branco hover:text-azul rounded-md px-2 py-0.5 text-xl font-medium"><Link to="/">Home</Link></li>
            <li className="text-branco hover:bg-branco hover:text-azul rounded-md px-2 py-0.5 text-xl font-medium"><Link to="/about">Sobre</Link></li>
            <li className="text-branco hover:bg-branco hover:text-azul rounded-md px-2 py-0.5 text-xl font-medium"><Link to="/contact">Contato</Link></li>
            <Link to="/login"><img className="h-8 w-8 rounded-full" src={user} /></Link>
        </ul>
    )}
</div>
        
    
  )
}

export default Navbar
 

