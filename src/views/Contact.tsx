import React from 'react'
import FormContact from '../components/Forms/FormContact'

const Contact = () => {
    return (
       
<div className='py-12 px-4 flex flex-col justify-center items-center bg-gradient-to-bl from-white to-blue-200'>

<div className='text-center lg:flex lg:justify-evenly lg:items-center '>
  <div className='lg:w-1/2 lg:pr-4 mb-6 lg:mb-0 '>
    <h1 className='text-azul text-5xl font-medium mb-6 lg:text-6xl'>Converse conosco</h1>
    <p className='text-lg text-justify mb-6 lg:text-xl'>Queremos ouvir você! Entre em contato conosco para dúvidas, comentários ou apenas para dizer olá. Nossa equipe está pronta para ajudar com tudo relacionado ao projeto For MEI e muito mais. Preencha o formulário abaixo ou envie um e-mail para <a href="mailto:guilhermequiulo@gmail.com" className='underline hover:text-blue-800'>atendimento@dazzle.com.br</a>.</p>
  </div>
  
  <div className='  '>
    <div className='rounded-xl border-2 shadow-2xl border-azul bg-branco'>
      <FormContact />
    </div>
  </div>
</div>

</div>

       
    )
    
}

export default Contact




