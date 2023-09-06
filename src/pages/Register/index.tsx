import React, { useContext, useState } from 'react';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { ArrowCircleLeft } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { MovieContext } from '../../context/MovieContext';

export function Register() {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { registerNewUser } = useContext(MovieContext);

  function handleRegister(
    email: string,
    password: string,
    name: string,
    event
  ) {
    event.preventDefault();

    if (email && password && name && password === confirmPassword) {
      registerNewUser(email, password, name);
    }
  }

  return (
    <section className=" w-full h-full relative bg-black flex justify-center">
      <Link to={'/'}>
        <ArrowCircleLeft className="w-10 h-10 text-white absolute top-5 left-5 z-50" />
      </Link>
      {/* Imagem lateral */}
      <div
        className="hidden relative items-center flex-col w-3/5 bg-gradient-to-r 
      from-red-500 via-red-800 lg:flex"
      >
        <div
          className="flex items-center gap-2 flex-col absolute top-1/2 left-1/2 transform 
        -translate-x-1/2 -translate-y-1/2 "
        >
          <h2 className="text-5xl text-white font-bold text-center">
            Create new Accout
          </h2>
          <span className="text-xl text-white text-center">
            Create your account for free.
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-6 p-4 w-4/5 lg:w-2/5">
        <h2 className="text-2xl text-white font-bold p-6 text-center lg:hidden ">
          Log-in in your account
        </h2>
        <div
          className="w-full flex flex-col items-center p-6 gap-8 bg-black border-2 
        border-red-500 rounded-xl lg:max-w-2xl"
        >
          <form
            action="submit"
            className="flex flex-col w-full gap-2"
            onSubmit={(event) =>
              handleRegister(emailInput, passwordInput, nameInput, event)
            }
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="  text-white font-bold">
                Name:
              </label>
              <Input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="write your e-mail"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="  text-white font-bold">
                Email:
              </label>
              <Input
                type="text"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="write your e-mail"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="  text-white font-bold">
                Password:
              </label>
              <Input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="write your password"
              />
            </div>
            {passwordInput && (
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="  text-white font-bold">
                  Confirm your password:
                </label>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="write your password"
                />
              </div>
            )}

            <div className="w-full flex p-2 items-center justify-between gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-white text-sm font-bold text-left cursor-pointer transition-colors ease-out hover:text-red-500 ">
                  Forgget you'r password?
                </span>
                <Link
                  to={'/account/register'}
                  className="text-white text-xs font-bold text-left cursor-pointer transition-colors ease-out hover:text-red-500 "
                >
                  Don't have account? Register
                </Link>
              </div>
              <Button type="submit">Cadastrar</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
