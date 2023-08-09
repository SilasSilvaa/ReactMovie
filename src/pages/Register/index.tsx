import React from 'react';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { ArrowCircleLeft, ArrowLeft } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { LoginSvg } from '../../components/Svg/LoginSvg/LoginSvg';

export function Register() {
  return (
    <section className=" w-full h-full relative bg-black flex p-4 justify-center">
      <Link to={'/'}>
        <ArrowCircleLeft className="w-10 h-10 text-red-500 absolute top-5 left-5" />
      </Link>
      <div className="hidden items-center flex-col p-6 flex-1 lg:flex">
        <LoginSvg />
        <h2 className="text-2xl text-white font-bold">
          Enter in you'r account{' '}
        </h2>
      </div>
      <hr className="hidden border border-red-500 h-full lg:flex" />
      <div className="flex items-center justify-center flex-1 p-6">
        <div className="flex flex-1 flex-col items-center gap-6 p-6 bg-black border-2 border-red-500 rounded-xl md:max-w-2xl">
          <h2 className="text-2xl font-bold text-white">Register</h2>
          <form action="submit" className="flex flex-col w-full gap-2">
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
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="  text-white font-bold">
                Password:
              </label>
              <Input type="password" placeholder="write your password" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="  text-white font-bold">
                Password:
              </label>
              <Input type="password" placeholder="write your password" />
            </div>

            <div className="w-full flex p-6 items-center justify-between">
              <span className="text-white">Do you have login? Enter.</span>
              <Button>Register</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
