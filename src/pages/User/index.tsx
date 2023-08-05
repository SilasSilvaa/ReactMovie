import React, { useState } from 'react';
import { Button } from '../../components/Button/Button';

export function User() {
  const [changePassword, setChangePassword] = useState(false);

  return (
    <section className="flex flex-col p-6 pt-28 gap-10 md:pt-16 md:p-10">
      <p className="text-3xl font-bold text-white">Profile</p>

      <div className="flex w-full flex-wrap justify-center p-6 gap-16 bg-light-gray rounded-lg md:items-start md:max-w-[60vw] md:flex-row">
        <div className="flex flex-col items-center gap-4">
          <img
            src="/src/assets/film.jpg"
            alt=""
            className="w-40 h-40 object-cover rounded-full"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-lg font-bold text-white">Silas Silva</p>
            <p className="font-bold text-red-500">Web developer</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2 ">
          <label className="text-white font-bold">Name:</label>
          <input
            type="text"
            className="flex-1 bg-transparent border-2 border-red-500 rounded-lg p-2 text-white placeholder:text-gray"
            value={'Silas'}
          />
          <label className="text-white font-bold">E-mail:</label>
          <input
            type="text"
            className="flex-1 bg-transparent border-2 border-red-500 rounded-lg p-2 text-white placeholder:text-gray "
            value={'silas-oli@hotmail.com'}
          />
          <label className="text-white font-bold">Name:</label>
          <input
            type="text"
            className="flex-1 bg-transparent border-2 border-red-500 rounded-lg p-2 text-white placeholder:text-gray "
            value={'Silas'}
          />
          <label className="text-white font-bold">Name:</label>
          <input
            type="text"
            className="flex-1 bg-transparent border-2 border-red-500 rounded-lg p-2 text-white placeholder:text-gray "
            value={'Silas'}
          />
          <div className="flex items-center pt-6 justify-center md:justify-end">
            <Button text="Edit profile" />
          </div>
        </div>
      </div>
    </section>
  );
}
