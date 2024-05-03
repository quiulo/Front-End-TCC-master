import React from 'react'
import logoAzul from '../../assets/logoAzul.png'

function CardFeed() {
    const post = {
        nome: "adadad",
        descricao: "adad",
        comentarios : [
            {
                nome: "",
                mensagem: ""
            }
        ]
    }
  return (
    <div className='flex justify-center'>
        
        <div className=' w-1/3 border-4 border-red-500'>

           
                <div className=' flex justify-between items-center px-4 text-azul border-2 border-red-500'>
                    <div className='flex gap-2 '>
                        <img className=' h-8 h-8'src={logoAzul} />
                        <h1 className='text-lg'>For M.E.I</h1>
                    </div>
                    <h1 className='text-base'>Seja bem vindo</h1>
                </div>
            
            <div className= ' border-2 h-40 border-blue-500 flex justify-center items-center '>
                    <img className=' border-2 border-red-500 h-20' src={logoAzul} />
            </div>
                {post.comentarios.map((commentario) => (
                    <h1>{commentario.nome}</h1>
                ))}
            </div>
            
        
        </div>
    
  )
}

export default CardFeed