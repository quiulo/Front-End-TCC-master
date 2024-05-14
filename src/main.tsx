import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./UserContext.tsx";
import About from "./views/About.tsx";
import Contact from "./views/Contact.tsx";
import ErrorPage from "./views/ErrorPage.tsx";
import Login from "./views/Login/Login.tsx";
import SignUp from "./views/Login/SignUp.tsx";
import EsqueceuSenha from "./views/Login/EsqueceuSenha.tsx";
import PostView from "./views/Home/Post.tsx";
import Perfil from "./views/Home/PerfilUsuario.tsx";
import Home from "./views/Home/Home.tsx";
import PerfilAutonomo from "./views/Home/PerfilAutonomo.tsx";
import { posts } from "./services/Post.ts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/esqueceuSenha" element={<EsqueceuSenha />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/perfilAutonomo/:id" element={<PerfilAutonomo />} />
            <Route path="/post/:id" element={<PostView />} />
          </Route>

          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
