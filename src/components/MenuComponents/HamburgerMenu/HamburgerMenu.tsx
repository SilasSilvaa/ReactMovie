import React, { useState } from 'react';
import { Header } from '../Header/Header';
import { MenuOptions } from '../MenuOptions/MenuOptions';
import { X, List } from '@phosphor-icons/react';

export function HamburgerMenu() {
  const [toggleMenu, setToggleMenu] = useState(false);
  function openMenu() {
    setToggleMenu((state) => !state);
  }

  return (
    <>
      <div className="fixed w-full flex flex-col z-30 md:hidden">
        <div className="flex items-center p-4 justify-between bg-black">
          <Header />
          <div
            className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-black cursor-pointer md:hidden"
            onClick={openMenu}
          >
            {toggleMenu ? (
              <X className="text-white" size={25} />
            ) : (
              <List className="text-white" size={25} />
            )}
          </div>
        </div>
        {toggleMenu && (
          <div className="h-screen bg-black">
            <MenuOptions />
          </div>
        )}
      </div>
    </>
  );
}
