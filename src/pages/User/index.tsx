import React, { useState } from 'react';
import { Button } from '../../components/Button/Button';

export function User() {
  const [changePassword, setChangePassword] = useState(false);

  return (
    <section className="flex flex-col p-6 pt-28 gap-10 md:pt-16 md:p-10">
      <p className="text-3xl font-bold text-white">Profile</p>

      <div className="flex w-full flex-col items-center p-6 gap-6 bg-red-400 rounded-lg md:items-start md:max-w-[70vw] md:flex-row">
        <div className="flex flex-col items-center gap-4">
          <img
            src="/src/assets/film.jpg"
            alt=""
            className="w-40 h-40 object-cover rounded-full"
          />
          <p className="text-lg font-bold text-white">Silas Silva</p>
        </div>
        <div className="flex flex-col w-full gap-6">
          <label className="text-white font-bold">Name:</label>
          <input
            type="text"
            className="w-max-[40vw] bg-transparent border-2 border-red-500 rounded-lg p-2 text-white"
            value={'Silas'}
          />
        </div>
      </div>
    </section>
  );
}
