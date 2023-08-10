import React from 'react';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';

export function UserProfile() {
  return (
    <div className="flex w-full flex-col pt-20 gap-10 px-6">
      <p className="text-3xl font-bold text-white">Profile</p>

      <div className="flex w-full flex-wrap justify-center p-6 gap-6 bg-black rounded-lg border-2 border-red-500 md:items-start md:max-w-[60vw] md:flex-row">
        <div className="flex flex-col items-center gap-4">
          <img
            src="/src/assets/film.jpg"
            alt=""
            className="w-40 h-40 object-cover rounded-full border-2 border-red-500"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-lg font-bold text-white">Silas Silva</p>
            <p className="font-bold text-red-500">Web developer</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2 ">
          <label className="text-white font-bold">Name:</label>
          <Input type="text" value={'Silas'} />

          <label className="text-white font-bold">Full name:</label>
          <Input type="text" value={'Teste Teste Teste'} />

          <label className="text-white font-bold">E-mail:</label>
          <Input type="text" value={'teste@teste.com'} />

          <label className="text-white font-bold">Job:</label>
          <Input type="text" value={'Teste Teste'} />

          <div className="flex items-center pt-6 justify-center md:justify-end">
            <Button>Edit profile</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
