import React from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from '../../components/MenuComponents/Menu/Menu';
import { HamburgerMenu } from '../../components/MenuComponents/HamburgerMenu/HamburgerMenu';

export function Layout() {
  return (
    <>
      <div className="flex bg-black">
        <Menu />
        <section className="flex w-full h-screen flex-col overflow-y-auto scroll-smooth">
          <HamburgerMenu />
          <Outlet />
        </section>
      </div>
    </>
  );
}
