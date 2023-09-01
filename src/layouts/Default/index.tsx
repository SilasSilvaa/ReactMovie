import React from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from '../../components/MenuComponents/Menu/Menu';
import { HamburgerMenu } from '../../components/MenuComponents/HamburgerMenu/HamburgerMenu';
import {
  ChatsCircle,
  FilmReel,
  FilmSlate,
  Heart,
  SignOut,
  TrendUp,
  UserCircle,
} from '@phosphor-icons/react';

export function Layout() {
  return (
    <>
      <div className="flex bg-black">
        <Menu />
        <HamburgerMenu />
        <section className="flex w-full h-screen flex-col overflow-y-auto">
          <Outlet />
        </section>
      </div>
    </>
  );
}
