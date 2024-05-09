

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from"react-router-dom";      
import SideWidget from './components/Cards/SideWidget.tsx';
import { UserProvider } from './UserContext.tsx';
import Home from './views/Home/Home.tsx';
import About from './views/About.tsx';
import Contact from './views/Contact.tsx';
import ErrorPage from './views/ErrorPage.tsx';
import Login from './views/Login/Login.tsx';
import SignUp from './views/Login/SignUp.tsx';
import EsqueceuSenha from './views/Login/EsqueceuSenha.tsx';
import PostView from './views/Home/Post.tsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/post/:id" element={<PostView />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/signup" element={<SignUp />}/>
              <Route path="/esqueceusenha" element={<EsqueceuSenha />}/>
              <Route path="/*" element={<ErrorPage/>} />
            </Routes>
            
      </BrowserRouter>
     </UserProvider>
    </React.StrictMode>
)



// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'
// import { createBrowserRouter, RouterProvider } from"react-router-dom";      
// import SideWidget from './components/Cards/SideWidget.tsx';
// import { UserProvider } from './UserContext.tsx';

// import Home from './views/Home/HomeFeed.tsx';
// import About from './views/About.tsx';
// import Contact from './views/Contact.tsx';
// import ErrorPage from './views/ErrorPage.tsx';
// import Login from './views/Login/Login.tsx';
// import SignUp from './views/Login/SignUp.tsx';
// import EsqueceuSenha from './views/Login/EsqueceuSenha.tsx';
// import PostView from './views/Home/Post.tsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <Home />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//        {
//          path: "login",
//          element: <Login />
//        },
//        {
//         path: "signup",
//         element: <SignUp />
//        },
//        {
//         path: "esqueceusenha",
//         element: <EsqueceuSenha />
//        },
//        {
//         path: "/post/:id",
//         element: <PostView />
//        }
//     ],
//    },
// ]);
 
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )

