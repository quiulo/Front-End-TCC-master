import React from 'react'
import logoBranca from "../../assets/logoBranca.png";
import RecuperacaoSenha from '../../components/Forms/RecuperacaoSenha';

const EsqueceuSenha = () => {
  return (
    <div>
      <div className='flex h-screen'>
        <div className=' bg-azul w-1/2  flex items-center justify-center'>
            <img className='hover:h-72' src={logoBranca} alt="" srcset="" />
        </div>
        <div className='w-1/2 flex items-center justify-center'>
             <RecuperacaoSenha />
        </div>
        </div>


    </div>
 )
}


export default EsqueceuSenha