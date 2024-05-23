// import React from 'react'
// import {Link} from "react-router-dom";
// import { useState } from 'react';


// function FormContact() {
//   const [formData, setFormData] = useState<FormData>({
//     email: '',
//     message: '',
//   });

//   const handleFormEdit = (event: React.ChangeEvent<HTMLInputElement>, email: keyof FormData) => {
//     setFormData({
//       ...formData,
//       [email]: event.target.value
//     });
//   };

//   const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
//     try {
//       event.preventDefault();
//       const response = await fetch('/*endereço backend*/', {
//         method: 'POST',
//         body: JSON.stringify(formData)
//       });
//       const json = await response.json();
//       console.log(response.status);
//       console.log(json);
//     } catch (err) {
//       // Tratamento de erro aqui
//     }
//   };

//   return (
//     <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
//     <div class="sm:mx-auto sm:w-full sm:max-w-sm">
//       <h1 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-azul">Mande sua mensagem</h1>
//     </div>
  
//     <div class="mt-10 sm:mx-auto sm:w-96 sm:max-w-sm">
//       <form class="space-y-6" action="#" method="POST">    
//        <div>
//           <label for="email" class="block text-sm"> Email </label>
//           <div class="mt-2">
//             <input id="email" name="email" type="email" placeholder="Email" required value={formData.email} onChange={(e) => {handleFormEdit(e, 'email')}}autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-azul sm:text-sm sm:leading-6" />
//           </div>
//         </div>

//         <div>
//           <label for="mensagem" class="block text-sm"> Mensagem </label>
//           <div class="mt-2">
//             <textarea rows="10"id="mensagem" name="mensagem" placeholder="Escreva sua mensagem" required value={formData.message} onChange={(e) => {handleFormEdit(e, 'message')}}class="block resize-none w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-azul sm:text-sm sm:leading-6" />
//           </div>
//         </div>

//         <div>
//          <button type="submit" class="flex w-full justify-center rounded-md bg-azul px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> <Link to="/"></Link>Enviar</button>
//          </div>
//       </form>
//     </div>
//   </div>
//   )
// }

// export default FormContact

import React, { useState } from 'react';
import api from '../../utils/axios';

interface FormData {
  email: string;
  message: string;
}

const FormContact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const handleFormEdit = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof FormData) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      const response = await api.post('/contact', formData);
      setStatus({ loading: false, success: true, error: false });
      setFormData({ email: '', message: '' });
      console.log(response.status);
      console.log(response.data);
    } catch (err) {
      console.error('Erro ao enviar formulário:', err);
      setStatus({ loading: false, success: false, error: true });
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-azul">Mande sua mensagem</h1>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-96 sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleForm}>
          <div>
            <label htmlFor="email" className="block text-sm">Email</label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => handleFormEdit(e, 'email')}
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-azul sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm">Mensagem</label>
            <div className="mt-2">
              <textarea
                rows={10}
                id="message"
                name="message"
                placeholder="Escreva sua mensagem"
                required
                value={formData.message}
                onChange={(e) => handleFormEdit(e, 'message')}
                className="block resize-none w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-azul sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={status.loading}
              className="flex w-full justify-center rounded-md bg-azul px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {status.loading ? 'Enviando...' : 'Enviar'}
            </button>
          </div>

          {status.success && <p className="text-green-500 text-base mt-2">Mensagem enviada com sucesso!</p>}
          {status.error && <p className="text-red-500 text-base mt-2">Erro ao enviar mensagem. Tente novamente.</p>}
        </form>
      </div>
    </div>
  );
};

export default FormContact;
