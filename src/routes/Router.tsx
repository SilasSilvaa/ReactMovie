import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Layout } from '../layouts/Default';
import { Favourites } from '../pages/Favourites';
import { Trending } from '../pages/Trending';
import { Community } from '../pages/Community';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { AccountLoginAndRegister } from '../layouts/AccountLoginAndRegister';
import { UserProfile } from '../pages/UserProfile';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/community" element={<Community />} />
      </Route>

      <Route path="/account" element={<AccountLoginAndRegister />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}
