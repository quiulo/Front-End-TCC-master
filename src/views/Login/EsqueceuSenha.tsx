import React from 'react'
import logoBranca from "../../assets/logoBranca.png";
import RecuperacaoSenha from '../../components/Forms/RecuperacaoSenha';

const EsqueceuSenha = () => {
  return (
<div className='flex flex-col items-center lg:flex-row h-full'>
  <div className='bg-azul w-full lg:w-1/2 flex items-center justify-center'>
    <img src={logoBranca} alt=""/>
  </div>
  <div className='w-full lg:w-1/2 flex items-center justify-center'>
    <RecuperacaoSenha /> 
  </div>
</div>
 )
}


export default EsqueceuSenha
