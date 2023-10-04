import React from 'react';
import { MenuOptions } from '../MenuOptions/MenuOptions';
import { Title } from '../Title/Title';

export function Menu() {
  return (
    <>
      <aside className=" hidden flex-1 flex-col bg-black lg:flex">
        <div className="flex flex-1 flex-col bg-darkGray p-2">
          <div className="p-2">
            <Title />
          </div>
          <MenuOptions />
        </div>
      </aside>
    </>
  );
}
