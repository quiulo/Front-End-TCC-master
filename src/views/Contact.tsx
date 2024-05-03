import React from 'react'
import Footer from '../components/Footer'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import FormContact from '../components/Forms/FormContact'

const Contact = () => {
    return (
       <div className=''> 
   
          <div className='flex h-screen '>
            <div className=' w-1/2 flex      justify-center bg-gradient-to-bl from-white to-blue-200'>
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


          </div>



       </div>
    )
    
}

export default Contact