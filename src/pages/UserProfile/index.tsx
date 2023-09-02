import React, { useState } from 'react';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';

export function UserProfile() {
  const [isEdtingProfile, setIsEditingProfile] = useState(false);
  const [inputPassword, setInputPassword] = useState('');

  return (
    <section className="flex w-full flex-col justify-center items-center pt-20 p-2 lg:pt-0">
      <div className="flex flex-col items-center p-6">
        <h1 className="text-2xl text-white font-bold">Profile</h1>
      </div>
      <div className="w-full bg-[#282726] rounded-lg p-6 lg:max-w-lg">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-white lg:w-28 lg:h-28"></div>
          <div className="w-full flex gap-4 p-4 items-center flex-wrap justify-center">
            <Button className="lg:py-2">Edit Profile photo</Button>
            <Button
              className="lg:py-2"
              onClick={() => setIsEditingProfile((state) => !state)}
            >
              Edit Profile
            </Button>
          </div>
          <form action="" className="w-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="inputName" className="text-white font-bold">
                Name:
              </label>
              <Input
                id="inputName"
                className=" bg-slate-200 text-black w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="inputEmail" className="text-white font-bold">
                Email:
              </label>
              <Input
                id="inputEmail"
                className=" bg-slate-200 text-black w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="inputPassword" className="text-white font-bold">
                Password:
              </label>
              <Input
                id="inputPassword"
                className=" bg-slate-200 text-black w-full"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                type="password"
              />
            </div>

            <div>
              {isEdtingProfile && (
                <>
                  {inputPassword && (
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="inputRepeatPassword"
                        className="text-white font-bold"
                      >
                        Repeat your password:
                      </label>
                      <Input
                        id="inputRepeatPassword"
                        className=" bg-slate-200 text-black w-full"
                        type="password"
                      />
                    </div>
                  )}

                  <div className="flex gap-4 pt-8 items-center justify-center">
                    <Button className="bg-green-500 hover:bg-green-700">
                      Confirm
                    </Button>
                    <Button onClick={() => setIsEditingProfile(false)}>
                      Cancel
                    </Button>
                  </div>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
