
import React from 'react'
import { Briefcase } from 'lucide-react'
import { useUser } from '../../UserContext'
import { Undo2 } from 'lucide-react'
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

const PerfilUsuario = () => {
    const { user } = useUser();
    
  return (
    <div className='bg-stone-100'>
     <div className="flex flex-col gap-3 px-4 py-6  rounded-2xl">
     <Link to="/"><Undo2 className='absolute bg-branco  rounded-tl-lg rounded-br-lg mt-3  h-8 w-8' /></Link>
    <div className="-space-y-6 flex flex-col ">
      <img
        src={user.backgroundImageUrl} 
        alt={`foto de plano de fundo do usuário ${user.name}`}
        className="w-full rounded-lg h-72 object-cover"
      /> <div className='flex justify-end '><PencilSquareIcon className='text-azul rounded-tl-lg rounded-br-lg bg-branco h-8 -mt-2'/></div>

      <div className='flex flex-col items-center lg:flex-row gap-6'>
      <img
        src={user.imageUrl}
        alt={`foto de perfil do usuário ${user.name}`}
        className="w-24 h-24 rounded-full object-cover"
      /><PencilSquareIcon className='text-azul h-8 absolute mt-16 ml-24 lg:mt-16 '/>
      <div className='lg:flex-col items-center mt-4 ml-4'>
      <div className=" flex justify-center items-center gap-2 lg:flex-row">
      <Briefcase size={32} className="text-azul w-6 h-6 " />
      <h2 className="text-azul font-bold  text-base">{user.job}</h2>
    </div>
       <h1 className=" text-center text-2xl text-black font-bold ">
      {user.name}
    </h1>
    </div>
    </div>
    </div>
  </div>

<div className='lg:flex justify-center'>
  <form className='flex flex-col p-4 text-lg text-azul font-bold lg:w-1/2'>
    <label>Nome</label> 
    <div className='flex items-center justify-between gap-4 '><input className="w-full rounded-xl "type="text" placeholder={user.name}  /> <PencilSquareIcon className='text-azul w-8' /> </div> <br />
    <label>Profissão</label>
    <div className='flex items-center justify-between gap-4 '><input className="w-full rounded-xl"type="text" placeholder={user.job}  /> <PencilSquareIcon className='text-azul w-8'/> </div><br />
    <label>Email</label>
    <div className='flex items-center justify-between gap-4 '><input className="w-full rounded-xl"type="text" placeholder={user.email}  /> <PencilSquareIcon className='text-azul w-8' /> </div>
    
  </form>
  </div>
  
  <div className='flex justify-center'><button className='text-lg rounded-full h-12  w-56 text-center bg-azul text-branco shadow-2xl'>Salvar</button></div>
  <br />
  </div>
  )
}

export default PerfilUsuario