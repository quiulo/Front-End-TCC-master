import React from 'react'
import { SquarePlus } from 'lucide-react';
import { useState } from 'react';
import { X } from "lucide-react"

interface InputProps {

    label: string,
    value: string,
    updateValue (value: any): void

  }

  const Input = ({ label, value, updateValue }: InputProps) => {

    return (
      <>
        <label>{label}</label>
        <input value={value} onChange={event => updateValue(event.target.value)} />
      </>
    )
  }


const CreateModalPost = () => {
    const [content, setContent] = useState ("");
    const [image, setImage] = useState ("");
 
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
       setMenuOpen (!menuOpen);
    };
  return (
    <div>
     <button onClick={toggleMenu}>
        {menuOpen ? <X className='text-azul'/> : <SquarePlus className='text-azul'/> }
     </button>
    {menuOpen && (
        <div className='bg-branco border-4 border-azul text-azul text-lg rounded-2xl h-96 w-80 absolute mt-6 -ml-20 xl:w-1/3 xl:h-1/2 xl:-ml-96 '>
            <form className='flex flex-col items-start px-4 py-4 gap-2 lg:gap-5'>
                <label className='font-bold'>Escreva aqui</label>
                <textarea className='rounded-2xl w-full h-24'></textarea>
                <br />
                <label className='font-bold'>Insira uma imagem</label>
                <input className="w-60 lg:96"type="file" name="arquivos"   accept="image/png, image/jpeg"  multiple /> 
            </form>
            <button className='mt-12 w-24 h-10 bg-azul text-branco text-center font-bold rounded-2xl lg:w-72 lg:mt-20'>Postar</button>
        </div>
    )}
    

      </div>
  )
}

export default CreateModalPost