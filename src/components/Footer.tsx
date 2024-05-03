import React from 'react'
import {FaInstagram, FaLinkedin, FaFacebook} from 'react-icons/fa6'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <div className='bg-azul items-center  text-branco py-6 mt-40'>
        <div className='flex justify-center b-0 space-x-20  '>
            <div><Link to="/"><FaInstagram></FaInstagram></Link></div>
            <div><Link to="/"><FaFacebook></FaFacebook></Link></div>
            <div><Link to="/"><FaLinkedin></FaLinkedin></Link></div>
        </div>
   
          <div className='flex items-center justify-center text-base py-4 space-x-16'>
            <h1><Link to="/">Home</Link></h1>
            <h1><Link to="/about">Sobre</Link></h1>
            <h1><Link to="/contact">Contato</Link></h1>
          </div>
          <div className='flex justify-center text-base text-gray-400'><p>&copy; {new Date().getFullYear()} Grupo Dazzle - Todos os direitos reservados</p></div>
        
        
      </div>
  )
}

export default Footer;

