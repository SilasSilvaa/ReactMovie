import React from 'react';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';

export function UserProfile() {
  return (
    <div className="flex w-full flex-col justify-center items-center gap-6 p-6">
      <p className="mediumTitle flex justify-center p-2">Profile</p>

      <div className="w-full flex flex-row flex-wrap items-center justify-center max-w-4xl gap-6 bg-red-900 rounded-lg p-2">
        <div className="w-full flex items-center justify-center bg-slate-500 rounded-lg md:w-80 ">
          <div className="flex items-center flex-col p-6 gap-6">
            <img
              src="/src/assets/film.jpg"
              className="rounded-full w-24 h-24 object-cover"
            />
            <div className="flex flex-col items-center">
              <span className="textCss text-black">Silas Silva</span>
              <span className="text-black">Dev FullStack</span>
            </div>

            <div className="flex flex-wrap gap-2 items-center justify-center">
              <Button className="p-2 "> Edit photo</Button>
              <Button className="p-2"> Edit profile</Button>
            </div>
          </div>
        </div>
        {/* <Input /> */}
        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="flex flex-1 gap-2">
            <label htmlFor="" className="font-bold text-white">
              Name
            </label>
            <Input />
          </div>
          <div className="flex flex-1 gap-2">
            <label htmlFor="" className="font-bold text-white">
              Full name
            </label>
            <Input />
          </div>
          <div className="flex flex-1 gap-2">
            <label htmlFor="" className="font-bold text-white">
              E-mail
            </label>
            <Input />
          </div>
          <div className="flex flex-1 gap-2">
            <label htmlFor="" className="font-bold text-white">
              password
            </label>
            <Input />
          </div>
          <div>
            <span>View password</span>
          </div>
        </div>
      </div>
    </div>
  );
}
