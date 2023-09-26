import {
  FilmSlate,
  Heart,
  TrendUp,
  UserCircle,
  SignOut,
  ChatsCircle,
} from '@phosphor-icons/react';
import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export function MenuOptions() {
  const { pathname } = useLocation();
  const [userLog, setUserLog] = useState<boolean>(true);

  return (
    <>
      <aside className="flex flex-1 flex-col ">
        <div className="flex flex-col gap-6 flex-1 p-4  lg:pt-16 lg:p-2">
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
                to={'/profile'}
                className={`textCss ${
                  pathname === '/profile' ? 'text-red-500' : 'text-white'
                }`}
              >
                <UserCircle size={40} className="svgCss" />
                Profile
              </NavLink>
            </>
          ) : (
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <Link
                  to={'/account/login'}
                  className="textCss text-white cursor-pointer hover:text-red-500 transition-colors ease-in-out"
                >
                  Login
                </Link>
              </div>
              <Link
                to={'/account/register'}
                className="text-sm text-white cursor-pointer font-bold hover:text-red-500 transition-colors ease-in-out"
              >
                Não possui login? Cadastre-se
              </Link>
            </div>
          )}
          <div className="flex flex-1 items-end pt-10 lg:pt-0">
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
      </aside>
    </>
  );
}
