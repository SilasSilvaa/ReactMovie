import React, { useState } from 'react';
import { Button } from '../../components/Button/Button';

export function User() {
  const [changePassword, setChangePassword] = useState(false);

  return (
    <section className="flex flex-col p-6 pt-24 md:pt-16 md:p-10">
      <p className="text-3xl font-bold text-white w-full">Profile</p>
      <div className="w-full flex flex-col p-10 gap-6 md:flex-row md:gap-20">
        <div className="flex flex-col gap-6 items-center">
          <img
            src="/src/assets/film.jpg"
            alt=""
            className="w-40 h-40 object-cover rounded-full"
          />
          <p className="text-lg font-bold text-white">Silas SIlva</p>
        </div>

        <div className="flex flex-col flex-1 gap-4">
          <p className="text-2xl font-bold text-white">Profile</p>
          <div className="flex flex-col gap-2 pt-10 ">
            <div className="w-full flex gap-2 items-center justify-center md:justify-start">
              <label htmlFor="" className="text-white font-bold w-28">
                First Name:
              </label>
              <input
                type="text"
                value={'Silas'}
                disabled={!changePassword}
                className="flex-1 bg-transparent border-2 border-red-500 rounded-lg p-2 text-white max-w-lg"
              />
            </div>
            <div className=" flex gap-2 items-center ">
              <label htmlFor="" className="text-white font-bold w-28">
                Full name:
              </label>
              <input
                type="text"
                value={'Silas Oliveira Silva'}
                disabled={!changePassword}
                className="flex-1 bg-transparent border-2 border-red-500 rounded-lg p-2 text-white max-w-lg"
              />
            </div>
            <div className=" flex gap-2 items-center ">
              <label htmlFor="" className="text-white font-bold w-28">
                E-mail:
              </label>
              <input
                type="text"
                value={'silas-oli@hotmail.com'}
                disabled={!changePassword}
                className="flex-1 bg-transparent border-2 border-red-500 rounded-lg p-2 text-white max-w-lg"
              />
            </div>
            <div className=" flex justify-center p-6 md:justify-end md:p-t-6 md:px-0">
              {changePassword ? (
                <Button
                  text="Cancel edit"
                  onClick={() => setChangePassword((state) => !state)}
                />
              ) : (
                <Button
                  text="Edit Profile"
                  onClick={() => setChangePassword((state) => !state)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
