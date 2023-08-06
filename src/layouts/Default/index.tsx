import React from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from '../../components/MenuComponents/Menu/Menu';
import { HamburgerMenu } from '../../components/MenuComponents/HamburgerMenu/HamburgerMenu';

export function Layout() {
  return (
    <>
      <div className="flex bg-black">
        <HamburgerMenu />
        <Menu />
        <div className="flex w-full h-screen flex-col overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
}
