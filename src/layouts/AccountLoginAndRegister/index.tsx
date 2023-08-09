import React from 'react';
import { Outlet } from 'react-router-dom';

export function AccountLoginAndRegister() {
  return (
    <>
      <div className="flex w-full h-screen flex-col overflow-y-auto">
        <Outlet />
      </div>
    </>
  );
}
