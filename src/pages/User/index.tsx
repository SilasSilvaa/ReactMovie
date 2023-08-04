import React, { useState } from 'react';
import { Button } from '../../components/Button/Button';

export function User() {
  const [changePassword, setChangePassword] = useState(false);

  return (
    <section className="flex flex-col p-6 pt-28 gap-10 md:pt-16 md:p-10">
      <p className="text-3xl font-bold text-white">Profile</p>

      <div className="flex w-full flex-col gap-10 md:flex-row bg-purple">
        <div className="flex flex-col gap-6 p-6 items-center">
          <img
            src="/src/assets/film.jpg"
            alt=""
            className="w-40 h-40 object-cover rounded-full"
          />
          <p className="text-lg font-bold text-white">Silas SIlva</p>
        </div>

        <div className="flex flex-1  flex-col items-center gap-4 p-6 md:items-start bg-slate-400">
          <p className="text-2xl font-bold text-white">Profile</p>
          <div className="w-full flex">
            <div className="w-full flex">
              <label htmlFor="">Name:</label>
              <input type="text" className="flex-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
