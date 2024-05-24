import React, { createContext, useContext, useState } from "react";

// Definindo uma interface para representar os dados do profissional
interface ProfissionalData {
  profissao: string;
  avaliacao: number;
  telefone: string;
  cpf: string;
  // Adicione mais campos conforme necessário
}

// Definindo uma interface para representar os dados do cliente
interface ClienteData {
  endereco: string;
  telefone: string;
  // Adicione mais campos conforme necessário
}

// Definindo uma interface expandida para representar um usuário
interface User {
  id: string;
  name: string;
  email: string;
  type: 'cliente' | 'profissional';
  backgroundImageUrl: string;
  imageUrl: string;
  profissionalData?: ProfissionalData; // Dados específicos do profissional
  clienteData?: ClienteData; // Dados específicos do cliente
}

// Definindo o tipo de contexto
interface UserContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

// Criando o contexto
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provedor de contexto
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>({
    id: "1",
    name: "Mersun",
    email: "mersun@gmail.com",
    type: 'cliente', // Definindo o tipo como cliente
    backgroundImageUrl: "https://example.com/background.jpg",
    imageUrl: "https://example.com/profile.jpg",
    profissionalData: undefined,
    clienteData: {
      endereco: "Rua Exemplo, 123",
      telefone: "123456789",
    },
  });

  // Função para atualizar o tipo de usuário
  const updateUserType = (type: 'cliente' | 'profissional') => {
    setUser(prevUser => ({ ...prevUser, type }));
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* Passando a função de atualização do tipo de usuário como parte do contexto */}
      {children}
    </UserContext.Provider>
  );
};

// Hook para consumir o contexto
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};



// import React, { createContext, useContext, useState } from "react";

// interface User {
//   name: string;
//   email: string;
//   job: string;
//   backgroundImageUrl: string;
//   imageUrl: string;
// }

// interface UserContextType {
//   user: User;
//   setUser: React.Dispatch<React.SetStateAction<User>>;
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);

// export const UserProvider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = useState<User>({
//     name: "Mersun",
//     email: "mersun@gmail.com",
//     job: "Administrador",
//     backgroundImageUrl:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Lanchonete_frente_da_pra%C3%A7a_da_S%C3%A9%2C_S%C3%A3o_Paulo%2C_Brasil.jpg/1200px-Lanchonete_frente_da_pra%C3%A7a_da_S%C3%A9%2C_S%C3%A3o_Paulo%2C_Brasil.jpg",
//     imageUrl:
//       "https://lh3.googleusercontent.com/a/AAcHTtdZwSCiaZ3QlmZmLx3RQT87IKuvMxihrZzWCYwNEnTueg=s192-c-mo",
//   });

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = (): UserContextType => {
//   const context = useContext(UserContext);
//   if (context === undefined) {
//     throw new Error("useUser must be used within a UserProvider");
//   }
//   return context;
// };
