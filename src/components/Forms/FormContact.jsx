import React from 'react'
import {Link} from "react-router-dom";

function FormContact() {
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h1 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-azul">Mande sua mensagem</h1>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-96 sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">    
       <div>
          <label for="email" class="block text-sm"> Email </label>
          <div class="mt-2">
            <input id="email" name="email" type="email" placeholder="Email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-azul sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <label for="mensagem" class="block text-sm"> Mensagem </label>
          <div class="mt-2">
            <textarea rows="10"id="mensagem" name="mensagem" placeholder="Escreva sua mensagem" required class="block resize-none w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-azul sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
         <button type="submit" class="flex w-full justify-center rounded-md bg-azul px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> <Link to="/"></Link>Enviar</button>
         </div>
      </form>
    </div>
  </div>
  )
}

export default FormContact