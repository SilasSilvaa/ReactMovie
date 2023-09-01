import React, { useState } from 'react';
import { MenuOptions } from '../MenuOptions/MenuOptions';
import { Header } from '../Header/Header';
import { SideBar } from '../SideBar/SideBar';

export function Menu() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <aside className="hidden flex-1 flex-col bg-black lg:flex ">
        {openMenu ? (
          <div
            className="flex flex-col flex-1 py-4 px-10"
            onClick={() => setOpenMenu((state) => !state)}
          >
            <Header />
            <MenuOptions />
          </div>
        ) : (
          <div
            className="flex flex-1"
            onClick={() => setOpenMenu((state) => !state)}
          >
            <SideBar />
          </div>
        )}
      </aside>
    </>
  );
}
