

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'


import { createBrowserRouter, RouterProvider } from"react-router-dom";      

import Home from './views/Home/HomeFeed.tsx';
import About from './views/About.tsx';
import Contact from './views/Contact.tsx';
import ErrorPage from './views/ErrorPage.tsx';
import Login from './views/Login/Login.tsx';
import SignUp from './views/Login/SignUp.tsx';
import EsqueceuSenha from './views/Login/EsqueceuSenha.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "about",
        element: <About />
      },
       {
         path: "login",
         element: <Login />
       },
       {
        path: "signup",
        element: <SignUp />
       },
       {
        path: "esqueceusenha",
        element: <EsqueceuSenha />
       }
    ],
   },
]);
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

