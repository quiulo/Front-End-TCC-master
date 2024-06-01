import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import api from '../../utils/axios'; // Importa a instância configurada do axios

interface FormData {
  nome: string;
  cnpj_cpf: string;
  telefone: string;
  senha: string;
}

const FormSignUpProfissional: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    cnpj_cpf: '',
    telefone: '',
    senha: '',
  });

  const handleFormEdit = (event: ChangeEvent<HTMLInputElement>, nome: keyof FormData) => {
    setFormData({
      ...formData,
      [nome]: event.target.value
    });
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    


    try {
      const response = await api.post(`${import.meta.env.VITE_API_BASE_URL}/api/prest-serv`);
      console.log(response.status);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
      // Tratamento de erro aqui
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-azul">Cadastre-se como profissional</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-96 sm:max-w-sm">
        <form onSubmit={handleFormSubmit} className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Nome completo</label>
            <div className="mt-2">
              <input id="name" name="name" type="text" placeholder="Nome completo" required value={formData.nome} onChange={(e) => handleFormEdit(e, 'nome')} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-azul sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label htmlFor="cpf" className="block text-sm font-medium leading-6 text-gray-900">CPF</label>
            <div className="mt-2">
              <input id="cpf" name="cpf" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" placeholder="xxx.xxx.xxx-xx" type="text" required value={formData.cnpj_cpf} onChange={(e) => handleFormEdit(e, 'cnpj_cpf')} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-azul sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label htmlFor="tel" className="block text-sm font-medium leading-6 text-gray-900">Telefone</label>
            <div className="mt-2">
              <input id="tel" name="tel" type="tel" pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" required value={formData.telefone} onChange={(e) => handleFormEdit(e, 'telefone')} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-azul sm:text-sm sm:leading-6" placeholder="xx xxxxx-xxxx" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Senha</label>
            </div>
            <div className="mt-2">
              <input id="password" name="password" type="password" placeholder="Senha" required value={formData.senha} onChange={(e) => handleFormEdit(e, 'senha')} autoComplete="current-password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-azul sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-azul px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cadastrar</button>
          </div>

          <h1 className="text-sm text-gray-500 flex-col text-center">É um cliente?
            <Link to="/signUpCliente">
              <h1 className="font-semibold leading-6 text-azul hover:text-indigo-500">Clique aqui para se cadastrar</h1>
            </Link>
          </h1>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Já possui cadastro?
          <Link to="/login">
            <a href="#" className="font-semibold leading-6 text-azul hover:text-indigo-500"> Faça login aqui</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FormSignUpProfissional;
