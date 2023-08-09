import React from 'react';
import { Header } from '../Header/Header';
import { MenuOptions } from '../MenuOptions/MenuOptions';

export function Menu() {
  return (
    <>
      <aside className="hidden h-screen flex-col bg-black p-6 md:flex ">
        <Header />
        <MenuOptions />
      </aside>
    </>
  );
}
