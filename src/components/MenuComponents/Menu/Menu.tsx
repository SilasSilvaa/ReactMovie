import React from 'react';
import { MenuOptions } from '../MenuOptions/MenuOptions';
import { Title } from '../Header/Title';

export function Menu() {
  return (
    <>
      <aside className="hidden h-screen flex-col bg-black p-6 md:flex ">
        <Title />
        <MenuOptions />
      </aside>
    </>
  );
}
