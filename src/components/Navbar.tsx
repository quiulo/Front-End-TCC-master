import {Link} from "react-router-dom";
import logo from "../assets/logoBranca.png";
import user from "../assets/user.webp";
// import {Menu , X } from "lucide-react"
import { useState} from "react";

 const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen (!menuOpen);
  };
  
  return (
 
    <div className="bg-azul px-12 py-2 flex justify-between items-center ">
        <img className="h-12 "src={logo} />
            <button className="md:hidden" onClick={toggleMenu}>
              {menuOpen ? <div color="white"/> : <div color="white"/>}
            </button>
            {menuOpen ?  <ul className="bg-azul">
                  <li className="text-branco hover:bg-branco hover:text-azul rounded-md px-2 py-0.5 text-xl font-medium "><Link to="/">Home</Link></li>
                  <li className="text-branco hover:bg-branco hover:text-azul rounded-md px-2 py-0.5 text-xl font-medium "><Link to="/about">Sobre</Link></li>
                  <li className="text-branco hover:bg-branco hover:text-azul rounded-md px-2 py-0.5 text-xl font-medium "><Link to="/contact">Contato</Link></li>
                  <li className="text-branco hover:bg-branco hover:text-azul rounded-md px-2 py-0.5 text-xl font-medium "><Link to="/login">Login</Link></li>
                </ul> : <></>}
              
               <div className="">
                <ul className="flex gap-8 ">
                  <li className="text-branco hover:bg-branco hover:text-azul rounded-md px-2 py-0.5 text-xl font-medium "><Link to="/">Home</Link></li>
                  <li className="text-branco hover:bg-branco hover:text-azul rounded-md px-2 py-0.5 text-xl font-medium "><Link to="/about">Sobre</Link></li>
                  <li className="text-branco hover:bg-branco hover:text-azul rounded-md px-2 py-0.5 text-xl font-medium "><Link to="/contact">Contato</Link></li>
                  <Link to="/login">
                    <button type="button" className=" relative flex rounded-full text-sm " id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <img className="h-8 w-8 rounded-full" src={user} />
                    </button>
                  </Link>
                </ul>
                </div>
             </div>








           
        
              



        
        
        

      
        
        
    
  )
}

export default Navbar
 

// //   <nav class="bg-azul">
// //   <div class="mx-12">
// //     <div class=" relative flex h-16 items-center justify-between ">
// //       <div class="flex flex-1 items-center justify- sm:items-stretch sm:justify-start">
// //         <div class="flex flex-shrink-0 items-center">
// //         <img src={logo} width={35} height={35}/>
// //         </div>

        


//         <div class=" absolute right-32   ">
//           <div class="flex space-x-10 " >
//             <a class="text-branco hover:bg-branco hover:text-azul rounded-md px-2 py-0.5 text-xl font-medium "><Link to="/">Home</Link></a>
//             <a class="text-branco hover:bg-branco hover:text-azul rounded-md px-2 py-0.5 text-xl font-medium"><Link to="/about">Sobre</Link></a>
//             <a class="text-branco hover:bg-branco hover:text-azul rounded-md px-2 py-0.5 text-xl font-medium"><Link to="/contact">Contatos</Link></a>
//           </div>
//         </div>
//       </div>
//       <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//         <div class="relative ml-3 ">
//           <div>
//           <Link to="/login">
//             <button type="button" class=" relative flex rounded-full text-sm " id="user-menu-button" aria-expanded="false" aria-haspopup="true">
//               <img class="h-8 w-8 rounded-full" src={user} alt="" />
//             </button>
//             </Link>
//             <div />
//           </div>
          
//         </div>
//       </div>
//     </div>
//   </div>
 

//   <div class="sm:hidden">
//           <div class="space-y-1 px-2 pb-3 pt-2">
//             <a href="#" class="text-branco hover:bg-branco hover:text-azul block rounded-md px-3 py-2 text-base font-medium"><Link to="/">Home</Link></a>
//             <a href="#" class="text-branco hover:bg-branco hover:text-azul block rounded-md px-3 py-2 text-base font-medium"><Link to="/about">Sobre</Link></a>
//             <a href="#" class="text-branco hover:bg-branco hover:text-azul block rounded-md px-3 py-2 text-base font-medium"><Link to="/contact">Contatos</Link></a>
//           </div>
//         </div>
// </nav>