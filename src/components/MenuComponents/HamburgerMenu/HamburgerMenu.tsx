import React, { useEffect, useState } from 'react';
import { MenuOptions } from '../MenuOptions/MenuOptions';
import { X, List } from '@phosphor-icons/react';
import { useLocation } from 'react-router-dom';
import { Title } from '../Title/Title';

export function HamburgerMenu() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setToggleMenu(false);
  }, [pathname]);

  function openMenu() {
    setToggleMenu((state) => !state);
  }

  return (
    <>
      <header className="fixed w-full flex flex-col z-30 lg:hidden">
        <div className="flex items-center p-6 justify-between bg-black">
          <Title />
          <div
            className="flex items-center justify-center w-10 h-10 rounded-full border-2 
            border-white bg-black cursor-pointer"
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
      </header>
    </>
  );
}
