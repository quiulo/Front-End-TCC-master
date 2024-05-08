import React from 'react'
import Footer from '../components/Footer'
import FormContact from '../components/Forms/FormContact'

const Contact = () => {
    return (
       
<div className='py-12 px-4 flex flex-col justify-center items-center bg-gradient-to-bl from-white to-blue-200'>

<div className='text-center lg:flex lg:justify-between xl:items-center 2xl:w-1/2'>
  <div className='2xl:w-1/2 2xl:pr-4 mb-6 xl:mb-0 '>
    <h1 className='text-azul text-5xl font-medium mb-6 lg:text-6xl'>Converse conosco</h1>
    <p className='text-lg text-justify mb-6 lg:text-xl'>Queremos ouvir você! Entre em contato conosco para dúvidas, comentários ou apenas para dizer olá. Nossa equipe está pronta para ajudar com tudo relacionado ao projeto For MEI e muito mais. Preencha o formulário abaixo ou envie um e-mail para <a href="mailto:guilhermequiulo@gmail.com" className='underline hover:text-blue-800'>atendimento@dazzle.com.br</a>.</p>
  </div>
  
  <div className='2xl:w-1/2 2xl:pl-4   '>
    <div className='rounded-xl border-2 shadow-2xl border-azul bg-branco'>
      <FormContact />
    </div>
  </div>
</div>

</div>



       
    )
    
}

export default Contact

{/* <div className='flex h-screen lg'>
<div className=' w-1/2 flex     justify-center bg-gradient-to-bl from-white to-blue-200'>
  <div className='mt-60 '><h1 className='text-azul text-center text-5xl font-medium '> Converse conosco</h1>

  <br />

    <p className='px-40 text-lg text-justify'>Queremos ouvir você! Entre em contato conosco para dúvidas, comentários ou apenas para dizer olá. Nossa equipe está pronta para ajudar com tudo relacionado ao projeto For M.E.I e muito mais. Preencha o formulário ao lado ou envie um e-mail para atendimento@dazzle.com.br</p>

    <br />

    <div className='flex gap-4 px-40 items-center '>
        < EnvelopeIcon className='ml-40 h-12 w-12 '/>
           <a href="mailto:guilhermequiulo@gmail.com"><h1 className='text-base underline hover:text-blue-800'>atendimento@dazzle.com.br</h1>
           </a>
    </div>
  </div>
</div>



<div className=' w-1/2 flex items-center justify-center bg-gradient-to-br from-white to-blue-200'>
  <div className='rounded-xl border-2 shadow-2xl border-azul p-8 bg-branco'>
    <FormContact/>
  </div>
</div>


</div> */}
