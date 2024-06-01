import React from 'react'
import logoBranca from "../../assets/logoBranca.png";
import FormSignUpProfissional from '../../components/Forms/FormSignUpProfissional';


const SignUpProfissional = () => {
  return (
    <div className='flex flex-col mb-60 lg:flex-row h-screen lg:mb-0'>
  <div className='bg-azul w-full lg:w-1/2 h-full flex items-center justify-center'>
    <img src={logoBranca} alt=""/>
  </div>
  <div className='w-full lg:w-1/2 flex items-center justify-center'>
    <FormSignUpProfissional />
  </div>
 
</div>
)
}

export default SignUpProfissional