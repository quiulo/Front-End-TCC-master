import React, { useState } from 'react';
import { SquarePlus, X } from 'lucide-react';
// import { Post } from "../../interfaces/Post";
// import {useParams} from 'react-router-dom'
// import { posts } from '../../services/Post';
// import CreatePostService from './services/CreatePostService';

const CreateModalPost = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}>
        <SquarePlus className='text-azul'/> 
      </button>
      {menuOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='relative bg-branco border-4 border-azul text-azul text-lg rounded-2xl h-1/2 w-96 xl:w-1/3 xl:h-1/2 p-4'>
            <button onClick={toggleMenu} className="absolute top-2 right-2">
              <X size={24} className="fill-black stroke-black" />
            </button>
            <form className='flex flex-col items-start gap-2 lg:gap-5'>
              <label className='font-bold'>Escreva aqui</label>
              <textarea className='rounded-2xl w-full h-24'></textarea>
              <br />
              <label className='font-bold'>Insira uma imagem</label>
              <input className="w-60 lg:w-96" type="file" name="arquivos" accept="image/png, image/jpeg" multiple /> 
            </form>
            <button className='mt-12 w-24 h-10 bg-azul text-branco text-center font-bold rounded-2xl lg:w-72 lg:mt-20'>Postar</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CreateModalPost;





// import React from 'react'
// import { SquarePlus } from 'lucide-react';
// import { useState } from 'react';
// import { X } from "lucide-react"
// import { Post } from "../../interfaces/Post";
// import {useParams} from 'react-router-dom'
// import { posts } from '../../services/Post';
// import CreatePostService from './services/CreatePostService';


// // interface Props {
// //   post: Post
// // }




// const CreateModalPost = () => {
//   // const [content, setContent] = useState ("");
//   // const [image, setImage] = useState ("");

//   // const params = useParams()

//   // }



//   // const handleInput = (event) => {
//   //     const {name, value} = event.target;
//   //     setContent({...posts, [name]: value })
//   // }

//   // const handleDelete = async (event) => {
//   //     event.preventDefault();
//   //     await CreatePostService.deletePost(params.id, post)
//   // }

//   // const handleSubmit = async (event) => {
//   //    event.preventDefault();
//   //    if(params.id){
//   //     await CreatePostService.updatePost(params.id, post)
//   //    } else {
//   //     await CreatePostService.createPost(post);
//   //    }
     
//   // }

  


 
 
//     const [menuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//        setMenuOpen (!menuOpen);
//     };
  
//   return (
//     <div>
//      <button onClick={toggleMenu}>
//         {menuOpen ? <X className='text-azul'/> : <SquarePlus className='text-azul'/> }
//      </button>
//     {menuOpen && (
//         <div className='bg-branco border-4 border-azul text-azul text-lg rounded-2xl h-96 w-80 absolute mt-6 -ml-20 xl:w-1/3 xl:h-1/2 xl:-ml-96 '>
//             <form className='flex flex-col items-start px-4 py-4 gap-2 lg:gap-5'>
//                 <label className='font-bold'>Escreva aqui</label>
//                 <textarea className='rounded-2xl w-full h-24'></textarea>
//                 <br />
//                 <label className='font-bold'>Insira uma imagem</label>
//                 <input className="w-60 lg:96"type="file" name="arquivos"   accept="image/png, image/jpeg"  multiple /> 
//             </form>
//             <button className='mt-12 w-24 h-10 bg-azul text-branco text-center font-bold rounded-2xl lg:w-72 lg:mt-20'>Postar</button>
//         </div>
//     )}
    
  
//       </div>
//   )
// }  
   
// export default CreateModalPost


