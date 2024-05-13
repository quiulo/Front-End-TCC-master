import React, { useState } from 'react'
import {Link} from "react-router-dom";
// import GoogleLogin from 'react-google-login';

const FormLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleFormEdit = (event: React.ChangeEvent<HTMLInputElement>, field: keyof typeof formData) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    });
  };

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    // try {
    //   event.preventDefault();
    //   const response = await fetch('/*endereço backend*/', {
    //     method: 'POST',
    //     body: JSON.stringify(formData)
    //   });
    //   const json = await response.json();
    //   console.log(response.status);
    //   console.log(json);
    // } catch (err) {
    //   // Tratamento de erro aqui
    // }
    console.log(event)
  };

  
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [profilePic, setProfilePic] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    const responseGoogle = (response) => {
      console.log(response);
        const {
          profileObj: { name, email, imageUrl },
        } = response;
        setName (name);
        setEmail (email);
        setProfilePic (imageUrl);
        setIsLoggedIn(true);
    }
 
    return (

   
        <div>
        
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-azul">Faça o login na sua conta</h2>
            </div>
          
            <div className="mt-10 sm:mx-auto sm:w-96 sm:max-w-sm">
            
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email </label>
                  <div className="mt-2">
                    <input id="email" name="email" type="email" placeholder="Email" required value={formData.email} onChange={(e) => {handleFormEdit(e, 'email')}} autocomplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-azul sm:text-sm sm:leading-6" />
                  </div>
                </div>
          
                <div>
                  <div className="flex items-center justify-between">
                    <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Senha</label>
                    <div className="text-sm">
                      <Link to="/esqueceuSenha">
                      <a href="#" className="font-semibold text-azul underline hover:text-blue-800">Esqueceu a senha?</a>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input id="password" name="password" type="password" placeholder="Senha" required value={formData.password} onChange={(e) => {handleFormEdit(e, 'password')}}  autocomplete="current-password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-azul sm:text-sm sm:leading-6" />
                  </div>
                </div>
          
                <div>
                
                 <button type="submit" className="flex w-full justify-center rounded-md bg-azul px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul"><Link to="/"> Login</Link> </button>

                <button classNameName='w-full' clientId='957265873836-tq4m13fsihfejq6v4pe0iq3mbrsc9vbn.apps.googleusercontent.com'
                buttonText='Continuar com o Google'
                onSuccess={responseGoogle}
                />

                {isLoggedIn ? <div>
                <img src={profilePic} alt="Profile" />
                <p>Name: {name}</p>
                <p>Email: {email}</p></div> : ''}
                
                </div>
              </form>
              
              <p className="mt-10 text-center text-sm text-gray-500">
                Não é cadastrado?
                <Link to="/SignUp">
                <a href="#" className="font-semibold leading-6 text-azul underline hover:text-blue-800"> Cadastre-se aqui</a>
                </Link>
              </p>
            </div>
          </div>
          </div>
          )
}

export default FormLogin