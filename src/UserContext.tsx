import React, { createContext, useContext, useState } from "react";

interface User {
  name: string;
  job: string;
  backgroundImageUrl: string;
  imageUrl: string;
}

interface UserContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>({
    name: "Mersun",
    job: "Administrador",
    backgroundImageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Lanchonete_frente_da_pra%C3%A7a_da_S%C3%A9%2C_S%C3%A3o_Paulo%2C_Brasil.jpg/1200px-Lanchonete_frente_da_pra%C3%A7a_da_S%C3%A9%2C_S%C3%A3o_Paulo%2C_Brasil.jpg",
    imageUrl:
      "https://lh3.googleusercontent.com/a/AAcHTtdZwSCiaZ3QlmZmLx3RQT87IKuvMxihrZzWCYwNEnTueg=s192-c-mo",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
