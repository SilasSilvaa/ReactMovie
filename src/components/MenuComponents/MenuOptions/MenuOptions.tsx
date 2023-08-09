import {
  FilmSlate,
  Heart,
  TrendUp,
  UserCircle,
  SignOut,
  SignIn,
  ChatsCircle,
} from '@phosphor-icons/react';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export function MenuOptions() {
  const { pathname } = useLocation();
  console.log(pathname);

  const [userLog, setUserLog] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-1 flex-col p-2 md:p-0 rounded-md backdrop-blur-sm md:backdrop-blur-none">
        <div className="flex flex-col gap-6 flex-1 p-4 pt-4 rounded-md md:pt-16 md:p-2">
          <NavLink
            to="/"
            className={`textCss ${
              pathname === '/' ? 'text-red-500' : 'text-white'
            }`}
          >
            <FilmSlate className="svgCss" />
            Home
          </NavLink>
          <NavLink
            to={'/favourites'}
            className={`textCss ${
              pathname === '/favourites' ? 'text-red-500' : 'text-white'
            }`}
          >
            <Heart size={40} className="svgCss" />
            Favourites
          </NavLink>
          <NavLink
            to={'/trending'}
            className={`textCss ${
              pathname === '/trending' ? 'text-red-500' : 'text-white'
            }`}
          >
            <TrendUp size={40} className="svgCss" />
            Trending
          </NavLink>

          {userLog ? (
            <>
              <NavLink
                to={'/community'}
                className={`textCss ${
                  pathname === '/community' ? 'text-red-500' : 'text-white'
                }`}
              >
                <ChatsCircle size={40} className="svgCss" />
                Community
              </NavLink>
              <hr className="border border-white w-full" />
              <NavLink
                to={'/user'}
                className={`textCss ${
                  pathname === '/user' ? 'text-red-500' : 'text-white'
                }`}
              >
                <UserCircle size={40} className="svgCss" />
                Profile
              </NavLink>
            </>
          ) : (
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="textCss text-white cursor-pointer hover:text-red-500 transition-colors ease-in-out">
                  Login
                </span>
              </div>
              <span className="text-sm text-white cursor-pointer font-bold hover:text-red-500 transition-colors ease-in-out">
                Não possui login? Cadastre-se
              </span>
            </div>
          )}
          <div className="flex flex-1 items-end pt-10 md:pt-0">
            <span className="textCss text-white cursor-pointer">
              {userLog && (
                <>
                  <SignOut className="svgCss" />
                  LogOut
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
