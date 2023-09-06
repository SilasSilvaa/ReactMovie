import React, { ReactNode, createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export const MovieContext = createContext({} as MovieContextProps);

interface MovieContextProps {
  registerNewUser: (email: string, password: string, name: string) => void;
}

interface ChildrenProps {
  children: ReactNode;
}

export function MovieContextProvider({ children }: ChildrenProps) {
  // const auth = getAuth();

  const [user, setUser] = useState({});

  async function registerNewUser(
    email: string,
    password: string,
    name: string
  ) {
    console.log('Teste');
    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log('Cadastrado com sucesso');
        console.log(res);
      })
      .catch((err) => {
        console.log('Erro ao cadastrar', err);
      });
  }

  return (
    <MovieContext.Provider
      value={{
        registerNewUser,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
