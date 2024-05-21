import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import api from '../../utils/axios'; // Importa a instância configurada do axios

interface FormData {
  name: string;
  cpf: string;
  tel: string;
  password: string;
}

const FormSignUpProfissional: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    cpf: '',
    tel: '',
    password: '',
  });

  const handleFormEdit = (event: ChangeEvent<HTMLInputElement>, name: keyof FormData) => {
    setFormData({
      ...formData,
      [name]: event.target.value
    });
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await api.post(`${import.meta.env.VITE_API_BASE_URL}/api/register`, formData);
 // Substitua '/your-endpoint' pelo caminho correto
      console.log(response.status);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
      // Tratamento de erro aqui
    }
  };



    return (
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-azul">Cadastre-se como profissional</h2>
        </div>
      
        <div class="mt-10 sm:mx-auto sm:w-96 sm:max-w-sm">
          <form onSubmit={handleFormSubmit} class="space-y-6" action="#" method="POST">
    
    
          <div>
              <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nome completo </label>
              <div class="mt-2">
                <input id="name" name="name"  type='text' placeholder="Nome completo" required value={formData.name} onChange={(e) => {handleFormEdit(e, 'name')}} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-azul sm:text-sm sm:leading-6" />
              </div>
            </div>
    
    
            <div>
              <label for="cpf/cnpj" class="block text-sm font-medium leading-6 text-gray-900">CPF </label>
              <div class="mt-2">
                <input id="cpf" name="cpf/cnpj" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" placeholder="xxx.xxx.xxx-xx" type="text" required value={formData.cpf} onChange={(e) => {handleFormEdit(e, 'cpf')}}class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-azul sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label for="telefone" class="block text-sm font-medium leading-6 text-gray-900">Telefone</label>
              <div class="mt-2">
                <input id="telefone" name="telefone" type="tel" pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" required value={formData.tel} onChange={(e) => {handleFormEdit(e, 'tel')}} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-azul sm:text-sm sm:leading-6"  placeholder="xx xxxxx-xxxx" />
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
               
             <button type="submit" class="flex w-full justify-center rounded-md bg-azul px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cadastrar</button>
             
            </div>

            <h1 className = " text-sm text-gray-500 flex-col text-center ">É um cliente?
              <Link to="/signUpCliente">
                <h1 className="font-semibold leading-6 text-azul hover:text-indigo-500">Clique aqui para se cadastrar</h1>
              </Link>
              </h1>

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

export default FormSignUpProfissional