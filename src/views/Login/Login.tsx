import React from 'react'
import logoBranca from "../../assets/logoBranca.png";
import FormLogin from '../../components/Forms/FormLogin';

const Login = () => {
 return (
    <div>
      <div className='flex h-screen '>
        <div className=' bg-azul w-1/2  flex items-center justify-center'>
            <img className='hover:h-72' src={logoBranca} alt="" srcset="" />
        </div>
        <div className='w-1/2 flex items-center justify-center'>
             <FormLogin />
        </div>
        </div>


    </div>
 )
}

export default Login

 