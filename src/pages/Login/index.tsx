import React from 'react';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { ArrowCircleLeft, ArrowLeft } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
export function Login() {
  return (
    <section className=" w-full h-full relative bg-black flex justify-center">
      <Link to={'/'}>
        <ArrowCircleLeft className="w-10 h-10 text-white absolute top-5 left-5 z-50" />
      </Link>
      <div className="hidden relative items-center flex-col flex-1 lg:flex">
        <img src="/src/assets/banner.jpg" alt="" className="w-full h-full" />
        <div className="flex items-center gap-2 flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <h2 className="text-4xl text-white font-bold text-center">
            Welcome back
          </h2>
          <span className="text-xl text-white text-center">
            Enter in your account
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-6 flex-1 p-4">
        <h2 className="text-2xl text-white font-bold p-6 text-center lg:hidden ">
          Log-in in your account
        </h2>
        <div className="w-full flex flex-col items-center p-6 gap-8 bg-black border-2 border-red-500 rounded-xl lg:max-w-2xl">
          {/* <h2 className="text-2xl font-bold text-white">Login</h2> */}
          <form action="submit" className="flex flex-col w-full gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="  text-white font-bold">
                Email:
              </label>
              <Input type="text" placeholder="write your e-mail" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="  text-white font-bold">
                Password:
              </label>
              <Input type="password" placeholder="write your password" />
            </div>
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
              <Button>Login</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
