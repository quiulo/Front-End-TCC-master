import React from 'react'
import logoBranca from "../../assets/logoBranca.png";
import FormLogin from '../../components/Forms/FormLogin';

const Login = () => {
 return (
    <div>
      <div className='  '>
        <div className=' '>
            <img src={logoBranca} alt=""/>
        </div>
        <div className=''>
             <FormLogin />
        </div>
        </div>


    </div>
 )
}

export default Login

{/* <div className=' lg:flex h-screen  '>
<div className=' bg-azul w-1/2  flex items-center justify-center'>
    <img src={logoBranca} alt=""/>
</div>
<div className='w-1/2 flex items-center justify-center'>
     <FormLogin />
</div>
</div> */}