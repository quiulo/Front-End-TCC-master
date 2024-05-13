
import React from 'react'
import { Briefcase } from 'lucide-react'
import { Undo2 } from 'lucide-react'
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { Post } from "../../interfaces/Post";

interface Props {
  post: Post;
}

const PerfilAutonomo = ({ post }: Props) => {
    
    
  return (
    <div className='bg-stone-100'>
     <div className="flex flex-col gap-3 px-4 py-6  rounded-2xl">
     <Link to="/"><Undo2 className='absolute bg-branco  rounded-tl-lg rounded-br-lg mt-3  h-8 w-8' /></Link>
    <div className="-space-y-6 flex flex-col ">
      <img
        src={post.author.backgroundImgUrl} 
        alt={`foto de plano de fundo do usuário ${post.author.name}`}
        className="w-full rounded-lg h-72 object-cover"
      /> <div className='flex justify-end '><PencilSquareIcon className='text-azul rounded-tl-lg rounded-br-lg bg-branco h-8 -mt-2'/></div>

      <div className='flex flex-col items-center lg:flex-row gap-6'>
      <img
        src={post.author.imageUrl}
        alt={`foto de perfil do usuário ${post.author.name}`}
        className="w-24 h-24 rounded-full object-cover"
      /><PencilSquareIcon className='text-azul h-8 absolute mt-16 ml-24 lg:mt-16 '/>
      <div className='lg:flex-col items-center mt-4 ml-4'>
      <div className=" flex justify-center items-center gap-2 lg:flex-row">
      <Briefcase size={32} className="text-azul w-6 h-6 " />
      <h2 className="text-azul font-bold  text-base">{post.author.job}</h2>
    </div>
       <h1 className=" text-center text-2xl text-black font-bold ">
      {post.author.name}
    </h1>
    </div>
    </div>
    </div>
  </div>
  </div>
  )
  }

  export default PerfilAutonomo