import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
const FormSignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    cpf: '',
    cnpj: '',
    tel: '',
    email: '',
    password: '',
  });

  const handleFormEdit = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setFormData({
      ...formData,
      [name]: event.target.value
    });
  };

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const response = await fetch('/*endereço backend*/', {
        method: 'POST',
        body: JSON.stringify(formData)
      });
      const json = await response.json();
      console.log(response.status);
      console.log(json);
    } catch (err) {
      // Tratamento de erro aqui
    }
  };




    return (
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-azul">Cadastre-se</h2>
        </div>
      
        <div class="mt-10 sm:mx-auto sm:w-96 sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST">
    
    
          <div>
              <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nome completo </label>
              <div class="mt-2">
                <input id="name" name="name"  type='text' placeholder="Nome completo" required value={formData.name} onChange={(e) => {handleFormEdit(e, 'name')}} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-azul sm:text-sm sm:leading-6" />
              </div>
            </div>
    
    
            <div>
              <label for="date" class="block text-sm font-medium leading-6 text-gray-900">Data de nascimento </label>
              <div class="mt-2">
                <input id="name" name="date" type='date' required value={formData.birthDate} onChange={(e) => {handleFormEdit(e, 'birthDate')}} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-azul sm:text-sm sm:leading-6" />
              </div>
            </div>
    
            <div>
              <label for="cpf/cnpj" class="block text-sm font-medium leading-6 text-gray-900">CPF/CNPJ </label>
              <div class="mt-2">
                <input id="cpf/cnpj" name="cpf/cnpj" type="text" required value={formData.cpf.cnpj} onChange={(e) => {handleFormEdit(e, 'cpf,cnpj')}}class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-azul sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label for="telefone" class="block text-sm font-medium leading-6 text-gray-900">Telefone</label>
              <div class="mt-2">
                <input id="telefone" name="telefone" type="tel" pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" required value={formData.tel} onChange={(e) => {handleFormEdit(e, 'tel')}} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-azul sm:text-sm sm:leading-6"  placeholder="xx xxxxx-xxxx" />
              </div>
            </div>
        
    
    
            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email </label>
              <div class="mt-2">
                <input id="email" name="email" type="email" placeholder="Email" required value={formData.email} onChange={(e) => {handleFormEdit(e, 'email')}}autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-azul sm:text-sm sm:leading-6" />
              </div>
            </div>
        
            
    
            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Senha</label>
              </div>
              <div class="mt-2">
                <input id="password" name="password" type="password" placeholder="Senha" required value={formData.password} onChange={(e) => {handleFormEdit(e, 'password')}}autocomplete="current-password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-azul sm:text-sm sm:leading-6" />
              </div>
            </div>
      
            <div>
               
             <button type="submit" class="flex w-full justify-center rounded-md bg-azul px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> <Link to="/"></Link>Cadastrar</button>
             
            </div>
          </form>
          
          <p class="mt-10 text-center text-sm text-gray-500">
            Já possui cadastro?
            <Link to="/login">
            <a href="#" class="font-semibold leading-6 text-azul hover:text-indigo-500"> Faça login aqui</a>
            </Link>
          </p>
        </div>
      </div>
      )
}

export default FormSignUp