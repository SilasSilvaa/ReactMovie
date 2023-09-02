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
import { Link, NavLink, useLocation } from 'react-router-dom';

export function SideBar() {
  const { pathname } = useLocation();
  const [userLog, setUserLog] = useState(true);

  return (
    <div
      className="hidden p-2 items-center flex-col bg-[#282726] lg:flex 
      rounded-lg"
    >
      <div className="flex flex-col gap-6 flex-1 rounded-md">
        <Link to={'/'}>
          <FilmReel className="text-red-500 w-10 h-10" />
        </Link>
        <div className="flex flex-col items-center gap-6 pt-14 flex-1">
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
              pathname === '/favourites' ? 'text-red-500' : 'text-white'
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
                <UserCircle size={40} className="svgCss " />
              </NavLink>
            </>
          )}
        </div>
        <div className="flex justify-center">
          <SignOut className="svgCss text-white" />
        </div>
      </div>
    </div>
  );
}
