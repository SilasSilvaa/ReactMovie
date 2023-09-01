import React, { useState } from 'react';
import { MenuOptions } from '../MenuOptions/MenuOptions';
import { Header } from '../Header/Header';
import { SideBar } from '../SideBar/SideBar';
import { CaretDoubleLeft, CaretDoubleRight } from '@phosphor-icons/react';

export function Menu() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <aside className=" hidden flex-1 flex-col bg-black lg:flex">
        <div className="relative flex flex-1 rounded-lg p-2">
          <div
            className="absolute w-8 h-8 right-[-2rem] top-5 z-50 bg-[#282726] rounded-lg 
            cursor-pointer p-1"
            onClick={() => setOpenMenu((state) => !state)}
          >
            {openMenu ? (
              <CaretDoubleLeft className="w-full h-full text-white" />
            ) : (
              <CaretDoubleRight className="w-full h-full text-white" />
            )}
          </div>
          {openMenu ? (
            <div
              className="flex flex-1 flex-col border bg-[#282726] rounded-lg px-2 
            transition-all ease-in"
            >
              <div className="p-2">
                <Header />
              </div>
              <MenuOptions />
            </div>
          ) : (
            <div className="flex flex-1  transition-all">
              <SideBar />
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
