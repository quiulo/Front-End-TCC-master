import React, { useState } from 'react';
import { Filter, X, Handshake, Cpu, Shirt, Wrench, HeartPulse, Home} from "lucide-react";

function CategoriesModal() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu} className="bg-azul rounded-lg p-2">
      <Filter size={28} className="fill-white stroke-white" />
      </button>
      {menuOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="relative bg-branco border-4 border-azul text-azul text-lg rounded-2xl h-1/2 w-96 ">
            <button onClick={toggleMenu} className="absolute top-2 right-2 ">
              <X size={24} className="fill-black stroke-black " />
            </button>
            
            <div className="flex  p-8 gap-8">
            <button className='w-40 h-10 bg-azul text-branco text-center font-bold rounded-2xl '>Mais recentes</button>
            <button className='w-40 h-10 bg-azul text-branco text-center font-bold rounded-2xl '>Mais antigos</button>
            </div>
            <h1 className="text-center text-2xl  font-bold">Categorias</h1>
            <hr />

            <div className="flex justify-center items-center my-8 flex-wrap gap-8">
  <div className="flex flex-col items-center my-4">
    <Handshake size={45} />
    <span>Consultoria</span>
  </div>
  <div className="flex flex-col items-center my-4 w-20 ">
    <Cpu size={45} />
    <span>Tecnologia</span>
  </div>
  <div className="flex flex-col items-center my-4 w-20">
    <Shirt size={45} />
    <span>Beleza</span>
  </div>
  <div className="flex flex-col items-center my-4 w-20">
    <Wrench size={45} />
    <span>Reformas</span>
  </div>
  <div className="flex flex-col items-center my-4 w-20">
    <HeartPulse size={45} />
    <span>Saúde</span>
  </div>
  <div className="flex flex-col items-center my-4 w-20">
    <Home size={45} />
    <span>Domésticos</span>
  </div>
</div>

          </div>
        </div>
      )}
    </div>
  );
}

export default CategoriesModal;

