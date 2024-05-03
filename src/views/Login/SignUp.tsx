import React from 'react'
import logoBranca from "../../assets/logoBranca.png";
import FormSignUp from '../../components/Forms/FormSignUp'

const SignUp = () => {
  return (
    <div>
    <div className='flex h-screen'>
      <div className=' bg-azul w-1/2  flex items-center justify-center'>
          <img className='hover:h-72' src={logoBranca} alt="" srcset="" />
      </div>
      <div className='w-1/2 flex items-center justify-center'>
           <FormSignUp />
      </div>
      </div>


  </div>
)
}

export default SignUp