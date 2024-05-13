import React from 'react'
import logoBranca from "../../assets/logoBranca.png";
import FormSignUp from '../../components/Forms/FormSignUp'

const SignUp = () => {
  return (
    <div className='flex flex-col mb-60 lg:flex-row h-screen lg:mb-0'>
  <div className='bg-azul w-full lg:w-1/2 h-full flex items-center justify-center'>
    <img src={logoBranca} alt=""/>
  </div>
  <div className='w-full lg:w-1/2 flex items-center justify-center'>
    <FormSignUp />
  </div>
</div>
)
}

export default SignUp