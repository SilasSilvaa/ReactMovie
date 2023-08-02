import React, { useState } from 'react';
import { Button } from '../../components/Button/Button';

export function User() {
  const [changePassword, setChangePassword] = useState(false);

  return (
    <section className="flex flex-col p-6 pt-24 md:pt-16 md:p-10">
      <p className="text-3xl font-bold text-white w-full">Profile</p>
      <div className="w-full flex flex-col gap-2 pt-10 ">
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
        <div className="w-full flex gap-2 items-center ">
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
        <div className="w-full flex gap-2 items-center ">
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

        <>
          <div className="w-full flex gap-2 items-center">
            <label htmlFor="" className="text-white font-bold w-28">
              Password:
            </label>
            <input
              type="text"
              value={'Silas Oliveira Silva'}
              disabled={!changePassword}
              className="flex-1 bg-transparent border-2 border-red-500 rounded-lg p-2 text-white max-w-lg"
            />
          </div>
          <div className="w-full flex gap-2 items-center">
            <label htmlFor="" className="text-white font-bold w-28">
              Confirm password:
            </label>
            <input
              type="text"
              value={'Silas Oliveira Silva'}
              disabled={!changePassword}
              className="flex-1 bg-transparent border-2 border-red-500 rounded-lg p-2 text-white max-w-lg"
            />
          </div>
        </>

        <div className="w-full flex justify-center p-6 md:justify-start md:p-t-6 md:px-0">
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
    </section>
  );
}
