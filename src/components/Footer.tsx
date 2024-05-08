import React from 'react'
import {FaInstagram, FaLinkedin, FaFacebook} from 'react-icons/fa6'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <div className='bg-azul fixed bottom-0 w-full text-branco space-y-4 py-4'>
        <div className='flex justify-center items-center gap-28  '>
            <a href='https://www.instagram.com/dazzle.ltda?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='><FaInstagram></FaInstagram></a>
            <a href=''><FaFacebook></FaFacebook></a>
            <a href=''><FaLinkedin></FaLinkedin></a>
        </div>
   
          <div className='flex items-center justify-center text-base gap-24'>
            <h1><Link to="/">Home</Link></h1>
            <h1><Link to="/about">Sobre</Link></h1>
            <h1><Link to="/contact">Contato</Link></h1>
          </div>
          <div className='flex justify-center items-center text-base text-gray-400'><p>&copy; {new Date().getFullYear()} Grupo Dazzle - Todos os direitos reservados</p></div>
        
        
      </div>
  )
}

export default Footer;

