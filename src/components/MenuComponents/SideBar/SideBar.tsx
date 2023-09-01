import {
  FilmReel,
  FilmSlate,
  Heart,
  TrendUp,
  ChatsCircle,
  UserCircle,
  SignOut,
} from '@phosphor-icons/react';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export function SideBar() {
  const { pathname } = useLocation();
  const [userLog, setUserLog] = useState(true);

  return (
    <div className="hidden py-4 px-2 items-center flex-col bg-black lg:flex border-r-2 border-red-500">
      <div className="flex flex-col gap-6 flex-1 rounded-md lg:p-2">
        <FilmReel className="text-red-500 w-10 h-10 " />
        <div className="flex flex-col gap-6 pt-12 flex-1">
          <NavLink
            to="/"
            className={`textCss ${
              pathname === '/' ? 'text-red-500' : 'text-white'
            }`}
          >
            <FilmSlate className="svgCss" />
          </NavLink>
          <NavLink
            to="/favourites"
            className={`textCss ${
              pathname === '/favoutites' ? 'text-red-500' : 'text-white'
            }`}
          >
            <Heart className="svgCss" />
          </NavLink>
          <NavLink
            to="/trending"
            className={`textCss ${
              pathname === '/trending' ? 'text-red-500' : 'text-white'
            }`}
          >
            <TrendUp className="svgCss" />
          </NavLink>
          {userLog && (
            <>
              <NavLink
                to={'/community'}
                className={`textCss ${
                  pathname === '/community' ? 'text-red-500' : 'text-white'
                }`}
              >
                <ChatsCircle size={40} className="svgCss" />
              </NavLink>
              <hr className="border border-white w-full" />
              <NavLink
                to={'/profile'}
                className={`textCss ${
                  pathname === '/profile' ? 'text-red-500' : 'text-white'
                }`}
              >
                <UserCircle size={40} className="svgCss" />
              </NavLink>
            </>
          )}
        </div>
        <div>
          <SignOut className="svgCss" />
        </div>
      </div>
    </div>
  );
}
